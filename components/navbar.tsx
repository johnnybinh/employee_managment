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

import { Link } from "@nextui-org/link";

import { lucia, validateRequest } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Form } from "@/lib/form";

export const Navbar = async () => {
  const { user } = await validateRequest();
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
          {!user ? (
            <div>
              <Link href="login">Login</Link>
            </div>
          ) : (
            <Form action={logout}>
              <Button type="submit" variant="shadow">
                Sign out
              </Button>
            </Form>
          )}
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};

const EmployeeNavBar = () => {};

const AdminNavBar = () => {};

async function logout() {
  "use server";
  console.log("logging out");
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/login");
}
