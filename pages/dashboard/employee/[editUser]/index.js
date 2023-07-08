import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../../components/common/DashboardLayout';
import axios from 'axios';
import { baseUrl, getHeaders } from '../../../../api/api';

const EditUser = () => {
    const router = useRouter()
    const id = router.query.editUser
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const { data: data } = await axios.get(
                    `${baseUrl}/users/get-one-user/${id}`,
                    { headers: getHeaders() }
                )
                setUser(data.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        })()
    }, [])
    
    if (loading) {
        return (
            <DashboardLayout title="Document">
                <div className="w-full flex h-[80vh] flex-col justify-center items-center">
                    <div className="flex justify-center relative">
                        <div className="custom-loader"></div>
                    </div>
                </div>
            </DashboardLayout>
        );
    }
    return (
        <DashboardLayout>
            <h2>here one user will be appear</h2>
        </DashboardLayout>
    );
};

export default EditUser;