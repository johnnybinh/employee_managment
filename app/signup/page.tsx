import { Input } from "@nextui-org/input";
import React from "react";
import { Form } from "@/lib/form";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { signup } from "./action";

const Signup = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center w-full h-full">
      <Form action={signup}>
        <div className="flex gap-4 flex-col">
          <p className="self-center font-bold text-2xl">Create Account</p>
          <p className="self-center text-xl">
            Enter your credentials to create new account
          </p>
          <Input label="username" type="text" name="username" id="username" />
          <Input
            label="password"
            type="password"
            name="password"
            id="password"
          />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </div>
      </Form>
      <hr className="h-0.5  my-8 w-1/4 bg-gray-400 border-0 " />
      <div className="flex flex-col gap-4 w-1/4">
        <p className="self-center text-xl">Already have an account? Register</p>
        <Button type="submit" className="" color="default">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Signup;
