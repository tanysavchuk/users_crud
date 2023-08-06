import React from "react";

const DeleteUser = ({ handleConfirmDelete, showConfirmation }: any) => {
  return (
    <>
      {showConfirmation && (
        <div
          className="bg-black bg-opacity-50 w-[100vw] h-[100vh] fixed top-0 left-0 z-20
       flex justify-center items-center overscroll-y-none"
        >
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border border-gray-200 m-3 rounded-sm p-7">
              <div>
                <div className="p-2 text-center">
                  <p className="my-5 text-gray-600">
                    Are you sure you want to delete this user?
                  </p>
                  <button
                    className="border border-indigo-700 rounded-sm uppercase text-indigo-700 font-bold px-2 hover:bg-indigo-700 hover:text-white mr-2 w-12"
                    onClick={handleConfirmDelete}
                  >
                    Yes
                  </button>
                  <button
                    className="border border-indigo-700 rounded-sm uppercase text-indigo-700 font-bold px-2 ml-2 hover:bg-indigo-700 hover:text-white w-12"
                    onClick={() => handleConfirmDelete()}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteUser;
