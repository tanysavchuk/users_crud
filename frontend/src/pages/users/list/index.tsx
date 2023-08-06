import React from "react";
import { Header } from "../../../components/header";
import { TableUsers } from "../../../components/table-users";
import { Link } from "react-router-dom";

export const List = () => {
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
        <TableUsers />
      </div>
    </div>
  );
};
