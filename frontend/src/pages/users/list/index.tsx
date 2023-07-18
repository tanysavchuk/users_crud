import React, { useEffect, useState } from "react";

import { Header } from "../../../components/header";
import { TableUsers } from "../../../components/table-users";
import { User } from "../../../../types";
import { Link } from "react-router-dom";

export const List = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUser = async () => {
    try {
      const res = await fetch("http://localhost:3001/users");
      const users = await res.json();
      console.log(users);
      setUsers(users);
    } catch (error) {
      console.error("users", error);
    }
  };

  useEffect(() => {}, [users]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Header />
      <div className="m-3 border border-gray-100 p-3">
        <div className="flex justify-between ">
          <h2 className="text-indigo-700 font-bold">USERS</h2>
          <Link to={"/create"}>
            <button className="bg-indigo-700 text-white font-bold text-sm py-2 px-3 rounded-md">
              CREATE
            </button>
          </Link>
        </div>
        <table className="w-full border border-gray-100 rounded-xl">
          <thead>
            <tr className=" h-14">
              <th className="text-center p-2">id</th>
              <th className="text-start p-2">Avatar</th>
              <th className="text-start p-2">First Name </th>
              <th className="text-start p-2">Last Name</th>
              <th className="text-start p-2"> Email</th>
              <th className="text-center p-2">Actions</th>
            </tr>
          </thead>

          {users.map((user: User) => (
            <TableUsers key={`${user.id}`} {...user} />
          ))}
        </table>
      </div>
    </div>
  );
};
