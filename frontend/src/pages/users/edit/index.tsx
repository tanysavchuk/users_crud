import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../../components/header";

export const Edit = () => {
  let { id } = useParams();
  const [userEdit, setUserEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  });

  // const handleChange = (event: any) => {
  //   const { name, value } = event.target;
  //   setUserEdit((prevUser) => ({
  //     ...prevUser,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (event: any) => {
    const { name, value, type, files } = event.target;

    if (type === "file" && files.length > 0) {
      // Handle image file
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserEdit((prevUser) => ({
          ...prevUser,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setUserEdit((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3001/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userEdit),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchUser = async () => {
    try {
      const res = await fetch(`http://localhost:3001/users/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      const userData = await res.json();
      setUserEdit(userData);
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  return (
    <div className="bg-red-200 text-center">
      <Header />
      <div className="border border-gray-200 m-5 p-5 rounded-sm h-[87vh]">
        <h2 className="text-indigo-700 font-bold mt-10 mb-7 text-center text-lg">
          EDIT USER
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="border border-gray-100 p-12 rounded-sm w-[500px]">
              <div className="flex justify-between w-full">
                <div className="w-1/2 mr-4">
                  <label
                    className="block text-gray-600 font-bold"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={userEdit.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-200 rounded-sm shadow py-2 px-3 text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-1/2 ml-4">
                  <label
                    className="block text-gray-600 font-bold"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={userEdit.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-200 rounded-sm shadow py-2 px-3 text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mt-7">
                <label
                  className="block text-gray-600 font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={userEdit.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="email"
                  className="border border-gray-200 rounded-sm shadow py-2 px-3 text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-center w-full items-center my-7">
                <label className="text-gray-600 text-sm" htmlFor="avatar">
                  Select picture:
                </label>
                {/* <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  className="text-gray-600 text-sm text-end ml-3"
                  value={userEdit.avatar}
                  onChange={handleChange}
                /> */}
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="bg-indigo-700 text-white font-bold text-sm py-2 px-12 rounded-md"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
