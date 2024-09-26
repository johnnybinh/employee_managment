import { Input } from "@nextui-org/input";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Form } from "@/lib/form";
import { loginAction } from "./action";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { user } = await validateRequest();
  if (user) {
    redirect("/");
  }
  return (
    <div className="p-4 flex flex-col justify-center items-center w-full h-full ">
      <div className=" w-1/4">
        <Form action={loginAction}>
          <div className="flex flex-col gap-4">
            <p className="self-center font-bold text-2xl">Login</p>
            <p className="self-center text-xl">
              Enter your credentials to login
            </p>
            <br />
            <Input name="username" id="username" />
            <Input type="password" name="password" id="password" />
            <Button type="submit" color="primary">
              Log in
            </Button>
          </div>
        </Form>
      </div>
      <hr className="h-0.5  my-8 w-1/4 bg-gray-400 border-0 " />
      <div className="flex flex-col gap-4 w-1/4">
        <p className="self-center text-xl">Don't have an account? Register</p>
        <Button color="default" className="">
          <Link href="/signup">sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
