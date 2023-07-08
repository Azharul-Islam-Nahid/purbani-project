import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/common/DashboardLayout';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import { baseUrl, getHeaders } from '../../../api/api';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const Employeers = () => {
    const router = useRouter()
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(true)
    useEffect(() => {
        (async () => {
            try {
                const { data: data } = await axios.get(
                    `${baseUrl}/users/get-all-user`,
                    { headers: getHeaders() }
                );
                setLoading(false);
                setUsers(data.data.data);
            } catch (error) {
                // console.log(error);
                setLoading(false);
            }
        })();
    }, [refetch]);
    const handleDeleteUser = async (id) => {
        try {
            const { data: data } = await axios.delete(
                `${baseUrl}/users/delete-one-user/${id}`,
                { headers: getHeaders() }
            );
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            setRefetch(!refetch)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }

    }

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
            <div className='mt-5 bg-white text-black border-l-3 border-r-3 border-color_pink rounded-lg p-6'>
                <table className='min-w-[800px] text-center '>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Knowledge</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && 
                            users.map((user, index) => <tr key={user?._id} className='hover'>
                                <th className='p-2'>{index + 1}</th>
                                <td className='p-2'>{user?.name}</td>
                                <td className='p-2'>{user?.role}</td>
                                <td className='p-2'>{user.knowledgeAccesses.length > 0 ? "Yes" : "No"}</td>

                                <td onClick={() => {
                                    router.push(`/dashboard/employee/${user?._id}`)
                                }} className='cursor-pointer p-2 '><div className='flex items-center gap-x-2'>
                                    <AiFillEdit /> <span>Edit</span>
                                </div></td>
                                <td onClick={() => handleDeleteUser(user?._id)} className='cursor-pointer p-2 hover:text-red-500'>
                                    <div className='flex items-center gap-x-2'>
                                        <AiOutlineDelete /> <span>Delete</span>
                                    </div>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

Employeers.auth = {
    adminOnly: true
}
export default Employeers;