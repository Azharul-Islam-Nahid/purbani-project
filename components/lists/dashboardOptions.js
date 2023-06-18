import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Image01 from "../../public/assets/images/Group-22.png";
import Image02 from "../../public/assets/images/Group-23.png";
import Image03 from "../../public/assets/images/Group-24.png";
import Image04 from "../../public/assets/images/Group-25.png";
import Image05 from "../../public/assets/images/Group-26.png";

import { authContext } from "../../context/authContext";
import DisplayCard from "../common/displayCard";

const DashboardOptions = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  // useEffect(() => {
  //   !state.user && router.push("./");
  // }, [state.user, router]);

  return (
    <DisplayCard>
      <div className="grid grid-cols-3 w-[720px]  py-20 px-10 h-full">
        <button
          className="pt-18 flex flex-col items-center"
          onClick={() => router.push("/dashboard/sustainability")}
        >
          <Image src={Image01} width={191} height={148} alt={"logo"} />
        </button>
        <button
          className="pt-8 flex flex-col items-center"
          onClick={() => router.push("/dashboard/it")}
        >
          <Image src={Image02} width={130} height={143} alt={"logo"} />
        </button>
        <button className="pt-8 flex flex-col items-center">
          <Image src={Image03} width={94} height={146} alt={"logo"} />
        </button>
        <button className="pt-16 flex flex-col items-center">
          <Image src={Image04} width={129} height={139} alt={"logo"} />
        </button>
        <button className="pt-16 flex flex-col items-center">
          <Image src={Image05} width={180} height={145} alt={"logo"} />
        </button>
      </div>
    </DisplayCard>
  );
};

export default DashboardOptions;
