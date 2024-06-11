import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 48 48"
    {...props}
  >
    <linearGradient
      id="a"
      x1={24}
      x2={24}
      y1={5}
      y2={43}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#21ad64" />
      <stop offset={1} stopColor="#088242" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M39 16v25a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17l11 11z"
    />
    <path fill="#61e3a7" d="M28 5v9a2 2 0 0 0 2 2h9L28 5z" />
    <path fill="#107c42" d="M39 16h-9c-.473 0-.917-.168-1.257-.444L39 27V16z" />
    <path
      fill="#fff"
      d="M32 23H16a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V24a1 1 0 0 0-1-1zm-15 6h4v2h-4v-2zm6 0h8v2h-8v-2zm8-2h-8v-2h8v2zm-10-2v2h-4v-2h4zm-4 8h4v2h-4v-2zm6 2v-2h8v2h-8z"
    />
    <path
      d="M32 22.5c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5H16c-.827 0-1.5-.673-1.5-1.5V24c0-.827.673-1.5 1.5-1.5h16m0-.5H16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V24c0-1.103-.897-2-2-2z"
      opacity={0.05}
    />
    <path
      d="M32 23a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1V24a1 1 0 0 1 1-1h16m0-.5H16c-.827 0-1.5.673-1.5 1.5v12c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5V24c0-.827-.673-1.5-1.5-1.5z"
      opacity={0.07}
    />
  </svg>
);
export default SvgComponent;
