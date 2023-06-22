import React, { useContext, useEffect } from "react";
import { authContext } from "../../context/authContext";
import { GET } from "../../api/api";
import SideNavbar from "../../components/common/sideNavbar";
import UserList from "../../components/lists/userLists";
import Layout from "../../components/common/Layout";
import Navbar from "../../components/common/navbar";

const Users = () => {
  const { state } = useContext(authContext);

  useEffect(() => {
    GET("/users").then(({ data, status }) => {
      console.log(data);
    });
  }, []);

  return (
    <Layout title="Users">
      <Navbar />
      <div className="flex flex-row justify-center items-center gap-6 ">
        <SideNavbar />
        <div>
          <UserList />
          <div className="text-white text-center pt-6 text-xl capitalize">
            {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;