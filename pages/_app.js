import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/common/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <div className="bg-[url('https://i.ibb.co/8Ycnyqx/bg-primary.png')] bg-no-repeat bg-cover h-screen">
      {Component.auth ? (
        <Auth adminOnly={Component?.auth?.adminOnly}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    setLoading(false);
  }, []);

  if (loading) {
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

  if (!user?.accessToken) {
    router.push("/");
  }

  if (adminOnly && !user?.isAdmin) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
  }

  return children;
}
