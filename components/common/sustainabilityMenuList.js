import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/assets/images/Certifiactions.png";
import img2 from "../../public/assets/images/Group 64 1.png";
import img3 from "../../public/assets/images/Group 67.png";
import img4 from "../../public/assets/images/Group 68.png";
import img5 from "../../public/assets/images/Group 69.png";

const SustainabilityMenuList = ({ url }) => {

  return (
    <div className="w-full h-full flex justify-center items-center mt-40">
      <div className="w-1/2">
        <div
          className={`backdrop-filter backdrop-blur-md  py-16 px-20 drop-shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-32 h-[55vh]`}
        >
          <Link className="hover:cursor-pointer" href={`/${url}/certification`}>
            <button>
              <Image src={img1} alt="img" width={200} height={200} />
            </button>
          </Link>
          <Link className="hover:cursor-pointer" href={`/${url}/buyer`}>
            <button>
              <Image src={img2} alt="img" width={120} height={120} />
            </button>
          </Link>
          <Link className="hover:cursor-pointer" href={`/${url}/law`}>
            <button>
              <Image src={img3} alt="img" width={120} height={120} />
            </button>
          </Link>
          <Link className="hover:cursor-pointer" href={`/${url}/forms`}>
            <button>
              <Image src={img4} alt="img" width={120} height={120} />
            </button>
          </Link>
          <Link className="hover:cursor-pointer" href={`/${url}/agreements`}>
            <button>
              <Image src={img5} alt="img" width={120} height={120} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityMenuList;
