import React from "react";
import { User } from "../../../types";
import { Link } from "react-router-dom";

export const TableUsers = ({
  id,
  avatar,
  firstName,
  lastName,
  email,
}: User) => {
  return (
    <tbody>
      <tr className=" h-14 border border-b-gray-200">
        <td className="p-2 text-center">{id}</td>
        <td className="p-2">
          <img src={avatar} className="w-12 h-12 rounded-full" />
        </td>
        <td className="p-2">{firstName}</td>
        <td className="p-2">{lastName}</td>

        <td className="p-2">{email}</td>
        <td className="p-2 text-indigo-700 flex justify-center items-center h-full w-auto">
          <div className="w-max flex border border-gray-300 rounded-sm">
            <Link to={"/edit"}>
              <button className=" w-16 h-full">EDIT</button>
            </Link>

            <button className="w-16 h-full  border-l border-gray-300">
              DEL
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
