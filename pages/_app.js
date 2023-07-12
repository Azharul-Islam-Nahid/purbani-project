import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/common/Layout";
import { useRouter } from "next/router";
import { AuthProvider, authContext } from "../context/authContext";
import { useContext, useEffect, useState } from "react";

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <AuthProvider>
      <div className="bg-[url('https://i.ibb.co/8Ycnyqx/bg-primary.png')] bg-no-repeat bg-cover h-screen">
        {Component.auth ? (
          <Auth adminOnly={Component?.auth?.adminOnly}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </AuthProvider>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { state } = useContext(authContext);

  if (state.loading) {
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

  if (!state.user && !state.logout) {
    router.push("/unauthorized?message=Login Required");
  }

  if (adminOnly && !state.user?.isAdmin && !state.logout) {
    router.push("/unauthorized?message=Admin Login Required");
  }

  return children;
}
