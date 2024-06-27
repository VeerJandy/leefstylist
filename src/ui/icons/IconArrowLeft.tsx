import classNames from 'classnames'

import type { IconProps } from '~/models/GlobalModel'

const IconArrowLeft = ({ classname, size }: IconProps) => (
  <svg
    width={size ?? 18}
    height={size ?? 18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(classname)}
  >
    <path
      d="M12.5 16L5 9.00002L12.5 2"
      stroke="currentColor"
      strokeWidth="0.999833"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default IconArrowLeft
