"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavBarItems = [
  {
    text: "Create",
    pathname: "/create",
  },
  {
    text: "Connect",
    pathname: "/connect",
  },
  {
    text: "Share",
    pathname: "/share",
  },
  {
    text: "Results",
    pathname: "/results",
  },
];

const NavBarMenuItem = ({
  text,
  pathname,
}: {
  text: string;
  pathname: string;
}) => {
  const currentPathname = usePathname();

  return (
    <Link
      href={pathname}
      className={cn(
        "border-b-4 flex flex-row items-center text-center h-full align-middle hover:text-foreground border-transparent p-2",
        { "border-primary text-foreground": pathname === currentPathname }
      )}
    >
      <div>{text}</div>
    </Link>
  );
};

const NavBarMenu = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-8 h-full text-muted-foreground">
      {NavBarItems.map((item) => (
        <NavBarMenuItem
          key={item.text}
          text={item.text}
          pathname={item.pathname}
        />
      ))}
    </div>
  );
};

export default NavBarMenu;
