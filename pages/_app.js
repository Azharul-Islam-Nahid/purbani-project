import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../context/authContext.js";
// import Navbar from "../components/common/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="bg-main-global h-screen">
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
