import Navbar from "../components/common/navbar";
import DownloadCard from "../components/landingPage/DownloadCard";
import GlanceCard from "../components/landingPage/GlanceCard";
import MissionAndVision from "../components/landingPage/MissionAndVission";
import OurValues from "../components/landingPage/OurValues";
import Footer from "../components/landingPage/Footer";
import Layout from "../components/common/Layout";

import Preloader from "../components/preloader/preloader.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the preloader has been shown before
    const preloaderShownBefore = localStorage.getItem("preloaderShown");
    if (preloaderShownBefore) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        // Mark the preloader as shown in localStorage
        localStorage.setItem("preloaderShown", "true");
      }, 5000);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Layout title="Home">
      <Navbar />
      <DownloadCard />
      <GlanceCard />
      <MissionAndVision />
      <OurValues />
      <Footer />
    </Layout>
  );
}
