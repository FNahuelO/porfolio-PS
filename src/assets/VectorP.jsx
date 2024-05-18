import * as React from 'react'
const SVGComponent = (props) => (
  <svg
    width={248}
    height={256}
    viewBox="0 0 248 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ zIndex: '1' }}
    {...props}
  >
    <path
      d="M2 203.533V15.5C2 12.1863 4.68629 9.5 8 9.5H95.4851C97.0939 9.5 98.6353 10.1461 99.7633 11.2932L120.747 32.6325C123.861 35.7995 129.217 34.6025 130.687 30.411L139.177 6.19927C140.208 3.2589 143.318 1.59708 146.335 2.37429L173.423 9.35137C173.807 9.45021 174.197 9.59484 174.553 9.76831C303.884 72.739 233.233 209.26 149.617 208.36C146.072 208.322 143 211.073 143 214.618V247.5C143 250.814 140.314 253.5 137 253.5H51.5039C49.9016 253.5 48.3659 252.859 47.2389 251.72L3.73497 207.753C2.62346 206.63 2 205.114 2 203.533Z"
      fill="#65187C"
      stroke="white"
      strokeWidth={4}
    />
    <g filter="url(#filter0_i_141_409)">
      <path
        d="M141.481 18.8229C142.375 16.2102 145.225 14.8014 147.774 15.8651C155.423 19.0581 162.509 23.4856 168.745 28.9806C176.233 35.5791 182.347 43.5879 186.74 52.5497C191.133 61.5115 193.718 71.2507 194.346 81.2114C194.975 91.172 193.636 101.159 190.405 110.602C187.174 120.045 182.115 128.759 175.517 136.247C168.918 143.735 160.909 149.85 151.948 154.243C142.986 158.636 133.247 161.22 123.286 161.849C114.991 162.373 106.678 161.532 98.6761 159.37C96.0102 158.65 94.6201 155.79 95.514 153.177L118.497 86L141.481 18.8229Z"
        fill="url(#paint0_linear_141_409)"
      />
      <rect
        x={9.5}
        y={16}
        width={87}
        height={191}
        rx={5}
        fill="url(#paint1_linear_141_409)"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_141_409"
        x={9.5}
        y={15.5083}
        width={185}
        height={195.492}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={55.1} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.87451 0 0 0 0 0.945098 0 0 0 0 0.968627 0 0 0 0.24 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_141_409"
        />
      </filter>
      <linearGradient
        id="paint0_linear_141_409"
        x1={29.1435}
        y1={26.0095}
        x2={125.497}
        y2={159.367}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.6} stopColor="#FAB334" />
        <stop offset={1} stopColor="#F88A6F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_141_409"
        x1={2.12273}
        y1={35.2542}
        x2={117.345}
        y2={109.085}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.6} stopColor="#FAB334" />
        <stop offset={1} stopColor="#F88A6F" />
      </linearGradient>
    </defs>
  </svg>
)
export default SVGComponent
