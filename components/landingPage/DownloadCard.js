import purbaniLogo from "../../public/assets/Logos/logo-purbani.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const DownloadCard = () => {





  return (
    <div className="flex w-full justify-center my-24 font-extrabold px-60 p-10">
      <div className="flex flex-col justify-between py-6 h-[379px] w-[681px] backdrop-blur-md bg-gray-100/10 rounded-3xl items-center">
        <div>
          <Image src={purbaniLogo} alt="Logo" width={184} height={48} />
        </div>
        <div className="text-2xl text-white font-extrabold w-64 text-center">
          OUR PURPOSE IS TO BUILD BETTER FUTURE TOGETHER
        </div>
        <div>

          <Link href={'/depertmentDocs'}>
            <button
              className="w-72 h-12 rounded-xl bg-color_brand text-color_white hover:bg-color_white hover:text-color_brand transition-all duration-500"

            >
              Download Documents
            </button>
        </div>
      </div>
      <PopUp route={{ url, setUrl }} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(DownloadCard), { ssr: false });