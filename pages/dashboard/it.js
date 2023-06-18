import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaDownload } from "react-icons/fa";

import { ItLinks } from "../../constants/notice";
import { authContext } from "../../context/authContext";

const IT = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  useEffect(() => {
    !state.user && router.push("./");
  }, [state.user, router]);

  return (
    <div>
      <div className="w-full flex items-center justify-center pt-28">
        <div className="grid  grid-cols-1 bg-white rounded-lg w-[800px] py-20 px-10 h-full">
          {ItLinks.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-row">
                <div className="text-lg font-bold px-4">{` ${idx + 1}.  ${item.name}`}</div>
                <a
                  className="text-2xl text-color_brand hover:text-white transition-all duration-200"
                  href={item.link}
                >
                  <FaDownload />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-white text-center pt-6 text-xl capitalize">
        {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
      </div>
    </div>
  );
};

export default IT;
