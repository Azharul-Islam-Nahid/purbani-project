
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import DashboardLayout from "../../../components/common/DashboardLayout";
import styles from '../../../styles/upload.module.css'


export default function Home() {
    return (
        <DashboardLayout title="buyer">
            <div className={`${styles.uploadCon} h-2/4 w-2/4`}>
                <div>
                    <p className="text-white text-7xl">{HiOutlineBuildingOffice}</p>
                </div>
            </div>

        </DashboardLayout>
    );
}
