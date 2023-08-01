import React, { useEffect, useState } from "react";
import Navbar from "../components/common/navbar";
import DownloadCard from "../components/landingPage/DownloadCard";
import GlanceCard from "../components/landingPage/GlanceCard";
import MissionAndVision from "../components/landingPage/MissionAndVission";
import OurValues from "../components/landingPage/OurValues";
import Footer from "../components/landingPage/Footer";
import Layout from "../components/common/Layout";

import Preloader from "../components/preloader/preloader.js";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the preloader has been shown before in the current session
    const preloaderShownBefore = sessionStorage.getItem("preloaderShown");
    if (preloaderShownBefore) {
      setLoading(false);
    } else {
      // Simulate some async data loading or other initialization tasks
      setTimeout(() => {
        setLoading(false);
        // Mark the preloader as shown in the current session
        sessionStorage.setItem("preloaderShown", "true");
      }, 5000); // Replace 5000 with your actual loading time
    }
  }, []);

  if (loading) {
    // Show the preloader
    return <Preloader />;
  }

  // Hide the preloader and show the actual content
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
