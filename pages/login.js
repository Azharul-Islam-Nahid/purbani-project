import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import Navbar from "../components/common/navbar";
import Image from "next/image";
import purbaniPurbani from "../public/assets/Logos/logo-purbani.png";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const { status, data: session } = useSession();
  const [employeeId, setEmployeeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token") && session?.user?.accessToken) {
      localStorage.setItem("token", session?.user?.accessToken);
    }
    if (session?.user) {
      console.log(session?.user);
      router.push(redirect || "/");
    }
  }, [redirect, router, session?.user]);

  // Login API
  const handleLogin = async () => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        employeeId: employeeId,
        password: password,
      });

      setLoading(false);
      setIncorrectCredentials(false);
      if (result.error) {
        setIncorrectCredentials(true);
        setLoading(false);
      }
    } catch (error) {
      setIncorrectCredentials(true);
      setLoading(false);
    }
  };

  if (status === "authenticated") {
    return (
      <Layout title="Loading">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="flex justify-center relative">
            <div className="custom-loader"></div>
          </div>
        </div>
      </Layout>
    );
  }

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
                  <div className="flex justify-center relative mb-[20px]">
                    <div className="custom-loader"></div>
                  </div>
                )}
                <div className="w-full flex justify-center">
                  <button
                    type="button"
                    className={`rounded-xl border bg-color_brand px-4 py-2 font-medium text-gray-100 hover:bg-white hover:text-black transition-all duration-100 mb-[20px] cursor-pointer`}
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
              <p className="text-center pb-5">
                {`Don't have account? `}{" "}
                <Link href="/register">
                  <a className="text-color_pink">Sign Up</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
