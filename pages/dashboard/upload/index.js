import React from 'react';
import DashboardLayout from '../../../components/common/DashboardLayout';
import { useRouter } from 'next/router';
import styles from '../../../styles/upload.module.css'
import upimg from '../../../public/assets/images/upload.png'
import Image from 'next/image';
const Upload = () => {
    const router = useRouter();
    const handleUpload = (e) => {
        setTimeout(() => {
            router.push("/dashboard/success");
        }, 1000);
    };
    return (
        <DashboardLayout>
            <div className={`${styles.uploadCon} w-3/4`}>
                <div>
                    <h2>Upload Files</h2>
                </div>
                <div className={`${styles.uploadContent}`}>
                    <label htmlFor='file1'>
                        <Image src={upimg} alt='img of the upload' width={100} height={100} />
                    </label>
                    <label htmlFor='file1'><h3>Browse File to Upload</h3></label>
                    <button><label htmlFor='file1'>Browse</label></button>
                    <input id='file1' type='file' className='hidden' />
                </div>
                <div>
                  <button onClick={() => handleUpload()}>Upload</button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Upload;