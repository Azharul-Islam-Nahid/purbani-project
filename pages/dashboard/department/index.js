import React from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import Link from "next/link";
import Image from "next/image";
import Image01 from "../../../public/assets/images/Group-22.png";
import Image02 from "../../../public/assets/images/Group-23.png";
import Image03 from "../../../public/assets/images/Group-24.png";
import Image04 from "../../../public/assets/images/Group-25.png";
import Image05 from "../../../public/assets/images/Group-26.png";
const Department = () => {
  return (
    <DashboardLayout>
      <div>
        <div
          className={`bg-white py-16 px-20 drop-shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-32`}
        >
          <Link href={"/upload"}>
            <Image src={Image01} alt="img" width={100} height={100} />
          </Link>
          <Link href={"/upload"}>
            <Image src={Image02} alt="img" width={100} height={100} />
          </Link>
          <Link href={"/upload"}>
            <Image src={Image03} alt="img" width={100} height={100} />
          </Link>
          <Link href={"/upload"}>
            <Image src={Image04} alt="img" width={100} height={100} />
          </Link>
          <Link href={"/upload"}>
            <Image src={Image05} alt="img" width={100} height={100} />
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Department;
