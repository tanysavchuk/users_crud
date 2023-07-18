import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-center item-center w-full bg-indigo-700 px-3 text-white shadow-md">
      <div className="flex justify-start item-center w-[95%] py-4">
        <button className="mr-4">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <p className="font-bold">CRUD</p>
      </div>
    </div>
  );
};
