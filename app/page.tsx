import { lucia } from "@/lib/auth";
import React from "react";

const page = async () => {
  const { user } = await lucia.validateSession();
  if (user) {
    alert(user);
  }
  return (
    <div className="flex justify-center items-center">
      <div>hello</div>
    </div>
  );
};

export default page;
