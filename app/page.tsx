import { lucia, validateRequest } from "@/lib/auth";
import React from "react";

const page = async () => {
  const { user } = await validateRequest();

  return (
    <div className="flex justify-center items-center">
      {!user ? <div>not logged</div> : <div>hello {user.username}</div>}
    </div>
  );
};

export default page;
