import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { authContext } from "../../context/authContext";
import { GET } from "../../api/api";

import SideNavbar from "../../components/common/sideNavbar";
import UserList from "../../components/lists/userLists";

const Users = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  useEffect(() => {
    GET("/users").then(({ data, status }) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    !state.user && router.push("./");
  }, [state.user, router]);
  return (
    <div className="flex flex-row justify-center items-center gap-6 ">
      <SideNavbar />

      <div>
        <UserList />

        <div className="text-white text-center pt-6 text-xl capitalize">
          {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
        </div>
      </div>
    </div>
  );
};

export default Users;
