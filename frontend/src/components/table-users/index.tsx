import React, { ReactElement, useState, useEffect } from "react";
import { User } from "../../../types";
import { Link } from "react-router-dom";
import DeleteUser from "../../components/delete-user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TableUsers = (): ReactElement => {
  const [users, setUsers] = useState<User[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<null | number>(null);

  const notify = () => toast("User deleted!");

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3001/users");
      const usersData = await res.json();
      setUsers(usersData);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const handleDeleteUser = (id: number) => {
    setUserIdToDelete(id);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (userIdToDelete !== null) {
        await fetch(`http://localhost:3001/users/${userIdToDelete}`, {
          method: "DELETE",
        });

        fetchUsers().then(() => notify());
      }
    } catch (error) {
      console.error("Failed to delete user", error);
    }

    setShowConfirmation(false);
    setUserIdToDelete(null);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
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
        <tbody>
          {users.map(({ id, firstName, lastName, email, avatar }) => (
            <tr key={id} className="h-14 border border-b-gray-200">
              <td className="p-2 text-center">{id}</td>
              <td className="p-2">
                <img src={avatar} className="w-12 h-12 rounded-full" />
              </td>
              <td className="p-2">{firstName}</td>
              <td className="p-2">{lastName}</td>

              <td className="p-2">{email}</td>
              <td className="p-2 text-indigo-700 flex justify-center items-center h-full w-auto">
                <div className="w-max flex border border-gray-300 rounded-sm">
                  <Link to={`/users/${id}/edit`}>
                    <button className=" w-16 h-full">EDIT</button>
                  </Link>

                  <button
                    className="w-16 h-full border-l border-gray-300"
                    onClick={() => handleDeleteUser(id)}
                  >
                    DEL
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteUser
        handleConfirmDelete={handleConfirmDelete}
        showConfirmation={showConfirmation}
      />
      <ToastContainer />
    </>
  );
};
