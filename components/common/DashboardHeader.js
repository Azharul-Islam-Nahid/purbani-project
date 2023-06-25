import React from "react";
import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import logoPurbani from "../../public/assets/Logos/logo-purbani.png";
import profileImg from "../../public/assets/images/profile.webp";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useRouter } from "next/router";

const DashboardHeader = ({ session }) => {
  const router = useRouter();

  return (
    <div className={`${styles.dashboardHeader}`}>
      <div>
        <button onClick={() => router.push("/")}>
          <Image
            className="rounded-full"
            src={logoPurbani}
            width={200}
            height={50}
            alt=""
          />
        </button>
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
          <span className="uppercase">{session?.user?.role}</span>
          <button>
            <IoIosArrowDropdownCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
