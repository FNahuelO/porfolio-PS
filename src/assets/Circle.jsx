import * as React from 'react'
const SVGComponent = (props) => (
  <svg
    width={573}
    height={610}
    viewBox="0 0 773 810"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={472.094}
      cy={338}
      r={props?.color ? 338 : 472}
      fill={props?.color ?? '#607FF3'}
    />
  </svg>
)
export default SVGComponent
