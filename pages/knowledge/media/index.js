import React from 'react';
import Layout from '../../../components/common/Layout';
import Navbar from '../../../components/common/navbar';
import styles from '../../../styles/knowledge.module.css'
import { useRouter } from 'next/router';
const KnowledgeMedia = () => {
    const router = useRouter()
    return (
        <Layout title={"Knowledge"}>
            <div className='flex flex-col  items-center h-screen overflow-y-auto'>
                <Navbar />
                <div
                    className={`${styles.dashboardOptions} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center my-5 mx-auto`}
                >
                    <div
                        onClick={() => router.push(`/`)}
                        className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                    >
                        <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                            1
                        </div>
                        <div className="text-xl font-semibold h-full flex justify-center items-center">
                            BASIS
                        </div>
                    </div>
                    <div
                        onClick={() => router.push("/")}
                        className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                    >
                        <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                            2
                        </div>
                        <div className="text-xl font-semibold h-full flex justify-center items-center">
                            ABAP
                        </div>
                    </div>
                    <div
                        onClick={() => router.push("/")}
                        className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                    >
                        <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                            3
                        </div>
                        <div className="text-xl font-semibold h-full flex justify-center items-center">
                            FICO
                        </div>
                    </div>
                    <div
                        className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                    >
                        <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                            4
                        </div>
                        <div className="text-xl font-semibold h-full flex justify-center items-center">
                            PM
                        </div>
                    </div>
                    <div
                        className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                    >
                        <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                            5
                        </div>
                        <div className="text-xl font-semibold h-full flex justify-center items-center">
                            HCM
                        </div>
                    </div>
                    <div
                        className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                    >
                        <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                            6
                        </div>
                        <div className="text-xl font-semibold h-full flex justify-center items-center">
                            SD
                        </div>
                    </div>
                    <div
                        className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                    >
                        <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                            7
                        </div>
                        <div className="text-xl font-semibold h-full flex justify-center items-center">
                            MM
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default KnowledgeMedia;