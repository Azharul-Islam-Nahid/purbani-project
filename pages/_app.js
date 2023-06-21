import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../context/authContext.js";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="bg-[url('https://i.ibb.co/8Ycnyqx/bg-primary.png')] bg-no-repeat bg-cover h-screen">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
