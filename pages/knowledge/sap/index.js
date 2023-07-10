import router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from '../../../styles/knowledge.module.css'
import { useEffect, useState } from 'react';

// Dynamically import components
const Layout = dynamic(() => import('../../../components/common/Layout'));
const Navbar = dynamic(() => import('../../../components/common/navbar'));

// Reusable OptionCard component
const OptionCard = ({ number, title }) => {

    const [user, setUser] = useState({});
    const router = useRouter();


    console.log("🚀 ~ file: index.js:17 ~ OptionCard ~ user:", user)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }, []);


    console.log(user?.role);

    // if (user?.role === 'super_admin') {
    return (
        <Link href={`sap/${title.toLowerCase()}`}>
            <a className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}>
                <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                    {number}
                </div>
                <div className="text-xl font-semibold h-full flex justify-center items-center">
                    {title}
                </div>
            </a>
        </Link>
    );
    // }

    // else {
    //     router.push('/unauthorized')
    // }
}

const KnowledgeMedia = () => {

    return (
        <Layout title="knowledge">
            <div className="flex flex-col items-center h-screen overflow-y-auto">
                <Navbar />
                <div className={`${styles.dashboardOptions} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center my-5 mx-auto`}>
                    <OptionCard number={1} title="BASIS" />
                    <OptionCard number={2} title="ABAP" />
                    <OptionCard number={3} title="FICO" />
                    <OptionCard number={4} title="PM" />
                    <OptionCard number={5} title="HCM" />
                    <OptionCard number={6} title="SD" />
                    <OptionCard number={7} title="MM" />
                </div>
            </div>
        </Layout>
    );
};

KnowledgeMedia.auth = true;

export default KnowledgeMedia;
