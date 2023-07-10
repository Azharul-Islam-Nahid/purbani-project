import router, { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "../../../styles/knowledge.module.css";
import { useEffect, useState } from "react";

// Dynamically import components
const Layout = dynamic(() => import("../../../components/common/Layout"));
const Navbar = dynamic(() => import("../../../components/common/navbar"));

// Reusable OptionCard component
const OptionCard = ({ number, title, user }) => {
    if (user?.role === "super_admin") {
        console.log(user);

        return (
            <Link href={`sap/${title.toLowerCase()}`}>
                <a
                    className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                >
                    <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                        {number}
                    </div>
                    <div className="text-xl font-semibold h-full flex justify-center items-center">
                        {title}
                    </div>
                </a>
            </Link>
        );
    }
    if (user?.knowledgeAccesses.includes(basis)) {

        return (
            <Link href={`sap/${title.toLowerCase()}`}>
                <a
                    className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
                >
                    <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                        {number}
                    </div>
                    <div className="text-xl font-semibold h-full flex justify-center items-center">
                        {title}
                    </div>
                </a>
            </Link>
        );
    }
    else {
        router.push("/unauthorized");
    }
};

const KnowledgeMedia = () => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <Layout title="Loading">
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    <div className="flex justify-center relative">
                        <div className="custom-loader"></div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="knowledge">
            <div className="flex flex-col items-center h-screen overflow-y-auto">
                <Navbar />
                <div
                    className={`${styles.dashboardOptions} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center my-5 mx-auto`}
                >
                    <OptionCard number={1} title="BASIS" user={user} />
                    <OptionCard number={2} title="ABAP" user={user} />
                    <OptionCard number={3} title="FICO" user={user} />
                    <OptionCard number={4} title="PM" user={user} />
                    <OptionCard number={5} title="HCM" user={user} />
                    <OptionCard number={6} title="SD" user={user} />
                    <OptionCard number={7} title="MM" user={user} />
                </div>
            </div>
        </Layout>
    );
};

KnowledgeMedia.auth = true;

export default KnowledgeMedia;
