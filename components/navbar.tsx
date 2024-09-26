import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {} from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <div>
      <NextUINavbar maxWidth="2xl" position="sticky" isBordered>
        <NavbarBrand>
          <p className="font-bold ">
            <Link href="/" className="text-white">
              Employee Mangament
            </Link>
          </p>
        </NavbarBrand>
        <NavbarContent justify="center" className="gap-8 ">
          <NavbarItem>
            <Link color="foreground" href="#">
              About You
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Link href="/login">Login</Link>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};

const EmployeeNavBar = () => {};

const AdminNavBar = () => {};
