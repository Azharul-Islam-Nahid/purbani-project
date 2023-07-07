import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import purbaniLogo from "../../public/assets/Logos/logo-purbani.png";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
// import Swal from "sweetalert2";
// import popupImg from "../../public/assets/images/popup.png";

import { BsFillPersonFill } from "react-icons/bs";
import PopUp from "./PopUp";
import { useState } from "react";
const Navbar = () => {
  const router = useRouter();
  const [url, setUrl] = useState(true);
  const { data: session } = useSession();

  const handleLogout = () => {
    localStorage.clear("x-auth-token");
    signOut({ callbackUrl: "/login" });
  };

  // const handleLinkClick = (link) => {
  //   console.log(link);
  //   if (!session?.user) {
  //     Swal.fire({
  //       imageUrl: purbaniLogo,
  //       imageWidth: 400,
  //       imageHeight: 200,
  //       imageAlt: "Custom image",
  //       html: `<a href="${link}">Login</a>`,
  //     });
  //   } else {
  //     router.push(link);
  //   }
  // };

  const handleLinkClick = (link) => {
    if (!session?.user) {
      window.my_modal_3.showModal();
      setUrl(link);
    } else {
      router.push(link);
    }
  };

  return (
    <div className="flex justify-center w-full relative z-20 ">
      <div
        className={`flex items-center ${router.pathname == "/" ? "justify-between" : "justify-center"
          } w-3/4  h-24 border-b border-gray-400`}
      >
        <div
          className={`${router.pathname != "/" ? "w-1/2 ml-32" : ""
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
              <button
                onClick={() => handleLinkClick("/login?redirect=/notice")}
                // onClick={() => handleLinkClick("/login?redirect=/notice")}
                className="text-color_white hover:text-color_brand transition-all duration-500"
              >
                Notices
              </button>
              <button
                onClick={() => handleLinkClick("/login?redirect=/policy")}
                // onClick={() => handleLinkClick("/login?redirect=/department")}
                className="text-color_white hover:text-color_brand transition-all duration-500"
              >
                Policies
              </button>
              <button
                onClick={() => handleLinkClick("/login?redirect=/knowledge")}
                className="text-color_white hover:text-color_brand transition-all duration-500"
              >
                Knowledge
              </button>
              {session?.user?.isAdmin && (
                <button
                  onClick={() => handleLinkClick("/login?redirect=/dashboard")}
                  className="text-color_white hover:text-color_brand transition-all duration-500"
                >
                  Dashboard
                </button>
              )}
            </div>
          </div>
        )}
        <div
          className={`${router.pathname != "/" ? "w-1/2 inline-flex justify-end" : ""
            } `}
        >
          {session?.user ? (
            <div className="flex items-center gap-x-3">
              <BsFillPersonFill size={34} className="text-white" />
              <button
                className="w-20 h-10 inline-flex justify-center items-center text-white px-2 capitalize font-semibold font-sans cursor-pointer  rounded-xl bg-color_brand hover:bg-color_white hover:text-color_brand transition-all duration-500"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
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
      <PopUp route={{ url, setUrl }} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
