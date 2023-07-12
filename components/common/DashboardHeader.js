import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import logoPurbani from "../../public/assets/Logos/logo-purbani.png";
import { useRouter } from "next/router";
import { SiPhpmyadmin } from "react-icons/si";
import UseGetUser from "../../hooks/useGetUser";

const DashboardHeader = () => {
  const router = useRouter();
  const { user } = UseGetUser();

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
          className={`${styles.profileBtn} flex justify-center items-center gap-x-1 py-2 px-6`}
        >
          {user?.role === "super_admin" ? user?.name : user?.role}
          <div className="w-[30px] h-[30px] flex flex-col justify-center items-center text-2xl">
            <SiPhpmyadmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
