import React from "react";
import type { SVGProps } from "react";

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.333 2.5c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 17.5 0 16.754 0 15.833V4.167C0 3.247.746 2.5 1.667 2.5zM7.168 11.328l-4.91 4.852h15.325l-4.857-4.802L10 13.265zM18.64 7.292l-4.796 3.316l4.796 4.736zm-17.279.061v7.836l4.686-4.631zm16.956-3.532H1.698a.358.358 0 0 0-.25.086a.26.26 0 0 0-.085.222v1.62L10 11.656l8.644-5.965V4.199c.001-.134-.03-.231-.092-.292a.306.306 0 0 0-.234-.086"
      ></path>
    </svg>
  );
}
