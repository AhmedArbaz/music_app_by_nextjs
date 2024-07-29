"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home">
           
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <div>
              <HoveredLink href="/courses">All Courses</HoveredLink>
            </div>
            <div>
              <HoveredLink href="/basick">Basic Music Theory</HoveredLink>
            </div>
            <div>
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            </div>
            <div>
              <HoveredLink href="/courses">Songwriting</HoveredLink>
            </div>
            <div>
              <HoveredLink href="/courses">Music</HoveredLink>
            </div>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={null} item="Contact Us">
        
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
