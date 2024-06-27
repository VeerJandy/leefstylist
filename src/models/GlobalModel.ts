export type Classname = string | string[]

export interface IconProps {
  classname?: Classname
  size?: number | string
}

export type RequestMethod = 'POST' | 'GET'

export interface MakeRequest {
  method?: RequestMethod
  data?: Object | Record<string, string>
  requestOptions?: RequestInit
  next?: NextFetchRequestConfig & RequestInit
}

export interface BackResponse<T = any> {
  response: T
  error: boolean
}
