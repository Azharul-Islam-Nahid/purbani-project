import Image from "next/image";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { authContext } from "../../context/authContext";
import purbaniLogo from "../../public/assets/Logos/logo-purbani.png";
import { GET, baseUrl, getHeaders, getLoggedInUser } from "../../api/api";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileName, setProfileName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const callApi = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/users/get-logged-in-user`,
          {
            withCredentials: true,
            credentials: "include",
            headers: getHeaders(),
          }
        );

        setUser(data.data);
      } catch (error) {
        // router.push("/login");
      }
    };
    callApi();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("token");
    router.reload();
    router.push("/");
  };

  return (
    <div className="flex justify-center w-full relative z-20 ">
      <div
        className={`flex items-center ${
          router.pathname == "/" ? "justify-between" : "justify-center"
        } w-3/4  h-24 border-b border-gray-400`}
      >
        <div
          className={`${
            router.pathname != "/" ? "w-1/2 ml-32" : ""
          } inline-flex justify-end `}
        >
          <Image
            src={purbaniLogo}
            width={184}
            height={48}
            alt={"logo"}
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer"
          />
        </div>

        {router.pathname == "/" && (
          <div>
            <div className="text-lg flex gap-9 font-semibold">
              <Link className="" href={"/"}>
                <a className="text-color_white hover:text-color_brand transition-all duration-500">
                  Mission
                </a>
              </Link>
              <Link href={"/"}>
                <a className="text-color_white hover:text-color_brand transition-all duration-500">
                  Vision
                </a>
              </Link>
              <Link href={"/"}>
                <a className="text-color_white hover:text-color_brand transition-all duration-500">
                  Values
                </a>
              </Link>
              <Link href={"/notice"}>
                <a className="text-color_white hover:text-color_brand transition-all duration-500">
                  Notices
                </a>
              </Link>
              <Link href={"/"}>
                <a className="text-color_white hover:text-color_brand transition-all duration-500">
                  Policies
                </a>
              </Link>
              <Link href={"/"}>
                <a className="text-color_white hover:text-color_brand transition-all duration-500">
                  Knowledge
                </a>
              </Link>
              {user?.role === "admin" && (
                <Link href={"/dashboard"}>
                  <a className="text-color_white hover:text-color_brand transition-all duration-500">
                    Dashboard
                  </a>
                </Link>
              )}
              {user?.role === "super_admin" && (
                <Link href={"/dashboard"}>
                  <a className="text-color_white hover:text-color_brand transition-all duration-500">
                    Dashboard
                  </a>
                </Link>
              )}
            </div>
          </div>
        )}
        <div
          className={`${
            router.pathname != "/" ? "w-1/2 inline-flex justify-end" : ""
          } `}
        >
          {user ? (
            <button
              className="w-20 h-10 inline-flex justify-center items-center text-white px-2 capitalize font-semibold font-sans cursor-pointer  rounded-xl bg-color_brand hover:bg-color_white hover:text-color_brand transition-all duration-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <div>
              {router.pathname == "/" && (
                <div className="flex gap-6">
                  <button
                    className="w-24 h-11 rounded-xl  text-color_white hover:text-color_brand transition-all duration-100"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Login
                  </button>
                  <button className="w-24 h-11 rounded-xl bg-color_brand text-color_white hover:bg-color_white hover:text-color_brand transition-all duration-500">
                    Forms
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
