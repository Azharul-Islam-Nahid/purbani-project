import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../context/authContext.js";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      if (typeof window !== "undefined") {
        router.push("/unauthorized?message=login required");
      }
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (adminOnly && !session?.user?.isAdmin) {
    if (typeof window !== "undefined") {
      router.push("/unauthorized?message=admin login required");
    }
  }

  return children;
}
