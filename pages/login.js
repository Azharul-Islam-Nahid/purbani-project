import React, { useState, useContext, useEffect } from "react";
import Layout from "../components/common/Layout";
import Navbar from "../components/common/navbar";
import Image from "next/image";
import purbaniPurbani from "../public/assets/Logos/logo-purbani.png";
import Router, { useRouter } from "next/router";
import { authContext } from "../context/authContext";
import { POST, getLoggedInUser } from "../api/api";

const Login = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(authContext);

  const [employeeId, setEmployeeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  const body = {
    employeeId: employeeId,
    password: password,
  };

  // useEffect(() => {
  //   state.token && router.push("./dashboard");
  // }, [state.token, router]);

  // Login API
  const handleLogin = () => {
    setLoading(true);
    POST(`/auth/login`, body).then(({ data, status }) => {
      if (status !== 200) {
        setIncorrectCredentials(true);
        setLoading(false);
      } else if (status === 200) {
        localStorage.setItem("token", data?.data?.token);
        localStorage.setItem("user", JSON.stringify(data?.data?.user));
        setIncorrectCredentials(false);
        setLoading(false);
        dispatch({
          type: "LOGIN",
          payload: {
            token: data?.data?.token,
            user: data?.data?.user,
          },
        });

        if (
          data?.data?.user?.role === "admin" ||
          data?.data?.user?.role === "super_admin"
        ) {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      }
    });
  };

  return (
    <Layout title="Login">
      <Navbar />
      <div>
        <div className="w-full flex items-center justify-center pt-28">
          <div className="flex flex-col items-center bg-white rounded-lg w-[440px] h-full">
            <div className="pt-8 flex flex-col items-center">
              <Image
                src={purbaniPurbani}
                width={184}
                height={48}
                alt={"logo"}
              />
              <div className="text-xl font-semibold">
                Welcome to Purbani Group
              </div>
            </div>
            <div className="pt-8 px-10 w-full ">
              <form>
                <div>
                  <div className="font-semibold">Employee ID</div>
                  <div className="mt-2">
                    <input
                      className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                      placeholder="Name"
                      type="text"
                      onChange={(e) => {
                        setEmployeeId(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold pt-5">Password</div>
                  <div>
                    <input
                      className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md mr-2"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="text-center py-2 text-rose-500 font-medium h-10">
                  <span
                    className={`${
                      incorrectCredentials === false ? "invisible" : "visible"
                    } transition-all duration-300`}
                  >
                    Your employee ID or password is incorrect
                  </span>
                </div>
                {loading == true && (
                  <div className="flex justify-center relative">
                    <div className=" custom-loader absolute -top-8"></div>
                  </div>
                )}
                <div className="pt-6 w-full flex justify-center">
                  <button
                    type="button"
                    className={` rounded-xl border bg-color_brand px-4 py-2 font-medium text-gray-100 hover:bg-white hover:text-black transition-all duration-100`}
                    disabled={!employeeId && !password}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogin();
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="flex gap-2 py-4">
              <div>{`Don't have any account?`}</div>
              <button
                className="text-color_brand font-semibold"
                onClick={() => {
                  router.push("./register");
                }}
              >
                Sign Up
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
