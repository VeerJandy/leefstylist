import classNames from 'classnames'

import type { IconProps } from '~/models/GlobalModel'

const IconArrowBottom = ({ classname, size }: IconProps) => (
  <svg
    width={size ?? 18}
    height={size ?? 18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(classname)}
  >
    <path
      d="M16.0001 5L9 12L2 5"
      stroke="#222222"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default IconArrowBottom
