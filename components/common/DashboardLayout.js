import { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import { authContext } from "../../context/authContext";
import { useRouter } from "next/router";
import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import logoPurbani from "../../public/assets/Logos/Logo_Purbani.png";
import profileImg from "../../public/assets/images/ruman2.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const DashboardLayout = ({ children }) => {
  const { state, dispatch } = useContext(authContext);
  const router = useRouter();

  // useEffect(() => {
  //   !state.user && router.push("./");
  // }, [state.user, router]);

  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex-1 pr-5">
          <div className={`${styles.dashboardHeader}`}>
            <div className="">
              <Image
                className="rounded-full"
                src={logoPurbani}
                width={200}
                height={50}
                alt=""
              />
            </div>
            <div className="text-white">
              <div
                className={`${styles.profileBtn} flex justify-center items-center gap-x-3 p-3`}
              >
                <div className="w-[30px] h-[30px] rounded-full border">
                  <Image
                    className="rounded-full"
                    src={profileImg}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
                <span>Ruman Islam</span>
                <button>
                  <IoIosArrowDropdownCircle className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
