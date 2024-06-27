import type {
  BackResponse,
  MakeRequest,
  RequestMethod
} from '~/models/GlobalModel'

export const isIncludeHttps = (url: string): boolean =>
  url.includes('http') || url.includes('https')

export function getUrlForRequest(url: string): string {
  let urlForRequest: string

  if (isIncludeHttps(url)) urlForRequest = url
  else urlForRequest = url.slice(0, 1) === '/' ? `/api${url}` : `/api/${url}`

  return process.env.NEXT_PUBLIC_CLIENT_URL + urlForRequest
}

export function getDataForRequest(
  url: string,
  method: RequestMethod,
  data?: Object | Record<string, string>
): string {
  let dataForRequest: string

  if (method === 'GET') {
    const dataParams: Record<string, string> = {}
    Object.entries(data ?? {}).map(([key, value]) => {
      if (value === 'object')
        throw new Error(
          `'object' type is not supported in GET request. Url: ${url}`
        )

      dataParams[key] = String(value)
    })
    const params = new URLSearchParams(dataParams)
    dataForRequest = decodeURIComponent(params.toString())
  } else {
    dataForRequest = JSON.stringify(data)
  }

  return dataForRequest
}

export const request = async <T = any>(
  url: string,
  params?: MakeRequest
): Promise<BackResponse<T>> => {
  const method = params?.method ?? 'GET'
  const data = params?.data ?? {}
  const requestOptions = params?.requestOptions ?? {}
  const next = params?.next ?? {}

  let urlForRequest = getUrlForRequest(url)

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  }

  const dataForRequest = getDataForRequest(url, method, data)
  method === 'GET'
    ? (urlForRequest += `?${dataForRequest}`)
    : (options.body = dataForRequest)

  const response = await fetch(urlForRequest, {
    ...options,
    ...requestOptions,
    ...next
  })
  return await response.json()
}

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))
