import Navbar from "../components/common/navbar";
import DownloadCard from "../components/landingPage/DownloadCard";
import GlanceCard from "../components/landingPage/GlanceCard";
import MissionAndVision from "../components/landingPage/MissionAndVission";
import OurValues from "../components/landingPage/OurValues";
import Footer from "../components/landingPage/Footer";
import Layout from "../components/common/Layout";
// import Preloader from "../components/preloader/preloader.js";
// import { useState } from "react";

export default function Home() {

  // const [loading, setLoading] = useState(true)

  // setTimeout(() => {

  //   setLoading(false)

  // }, 2000);

  // if (loading) {


  //   return (
  //     <Preloader />
  //   )

  // }



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
