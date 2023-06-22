import React from 'react';
import DashboardLayout from '../../../components/common/DashboardLayout';
import Image from 'next/image';
import styles from "../../../styles/success.module.css"
import tick from '../../../public/assets/images/tick.png'
const Success = () => {
    return (
        <DashboardLayout>
            <div className={`${styles.innerContainer}`}>
          <div
            className={`drop-shadow-2xl rounded-lg bg-white p-12 grid place-items-center`}
          >
            <div className={`${styles.successCon}`}>
              <Image src={tick} alt="tick" width={30} height={40} />
              <p>
                YOUR FILE UPDATETION <br />
                SUCCESSFULLY <br />
                DONE
              </p>
            </div>
          </div>
        </div>
        </DashboardLayout>
    );
};

Success.auth = {
  adminOnly: true
}

export default Success;