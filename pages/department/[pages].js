import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { FaDownload } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { ItLinks } from "../../constants/notice";
import { authContext } from "../../context/authContext";
import Layout from "../../components/common/Layout";
import Navbar from "../../components/common/navbar";

const pageDetails = () => {

    // const { state, dispatch } = useContext(authContext);

    // const router = useRouter();

    // useEffect(() => {
    //   !state.user && router.push("./");
    // }, [state.user, router]);

    return (
        <Layout title="IT">
            <Navbar />
            <div>
                <div className="w-full flex items-center justify-center pt-28">
                    <div className="grid  grid-cols-1 bg-white rounded-lg w-[800px] py-20 px-10 h-full">
                        {ItLinks.map((item, idx) => {
                            return (
                                <div key={idx} className="flex flex-row">
                                    <a className="text-2xl text-color_brand hover:text-black transition-all duration-200"><AiFillEye /></a>
                                    <div className="text-lg font-bold px-4">{` ${idx + 1}.  ${item.name
                                        }`}</div>
                                    <a
                                        className="text-2xl text-color_brand hover:text-black transition-all duration-200"
                                        href={item.link}
                                    >
                                        <FaDownload />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="text-white text-center pt-6 text-xl capitalize">
                    {/* {`${state.user?.name}, Welcome to Purbani Document Mangement System`} */}
                </div>
            </div>
        </Layout>
    );
};

export default pageDetails;