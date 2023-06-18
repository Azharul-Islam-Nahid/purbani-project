import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { authContext } from "../../context/authContext";
import { GET } from "../../api/api";

import SideNavbar from "../../components/common/sideNavbar";
import FileList from "../../components/lists/fileList";

const Files = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  useEffect(() => {}, []);

  useEffect(() => {
    !state.user && router.push("./");
  }, [state.user, router]);
  return (
    <div className="flex flex-row justify-center items-center gap-6 ">
      <SideNavbar />

      <div>
        <FileList />

        <div className="text-white text-center pt-6 text-xl capitalize">
          {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
        </div>
      </div>
    </div>
  );
};

export default Files;
