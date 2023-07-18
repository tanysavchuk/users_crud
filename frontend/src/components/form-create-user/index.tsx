import React, { useState } from "react";

export const CreateUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setUser({
          firstName: "",
          lastName: "",
          email: "",
          avatar: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="border border-gray-200  m-5 p-5 rounded-sm h-[87vh]">
      <h2 className="text-indigo-700 font-bold mt-10 mb-7 text-center text-lg">
        CREATE USER
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
                  value={user.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-200 rounded-sm shadow py-2 px-3 text-gray-700 leading-tight 
                  w-full focus:outline-none focus:shadow-outline"
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
                  value={user.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-200 rounded-sm shadow py-2 px-3 text-gray-700 leading-tight
                  w-full focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mt-7">
              <label className="block text-gray-600 font-bold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="email"
                className="border border-gray-200 rounded-sm shadow py-2 px-3 text-gray-700 leading-tight
                w-full focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-center w-full items-center my-7">
              <label className="text-gray-600  text-sm " htmlFor="avatar">
                Select picture:
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                className="text-gray-600 text-sm text-end ml-3"
                value={user.avatar}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="bg-indigo-700 text-white font-bold text-sm py-2 px-12 rounded-md "
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
