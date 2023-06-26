import React, { useContext } from "react";
import { UsersContext } from "../Contexts/UsersProvider";

export default function LogoutButton() {
  const UsrCtxt = useContext(UsersContext);

  return (
    <form className="w-full max-w-sm" onSubmit={UsrCtxt.logoff}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-full">
          <input
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Logoff"
          />
        </div>
      </div>
    </form>
  );
}
