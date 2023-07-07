import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/common/DashboardLayout';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
// import {AiOutlineDelete} from 'react-icons/ai'
const users = [
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
    {
        name: "ABU Hanif Chowdhuri",
        role: "Admin",
    },
]
const Employeers = () => {
    const [status, setStatus] = useState("loading");
    // http://localhost:5000/api/v1/users/get-all-user

    async function fetchData() {
        const res = await fetch('http://localhost:5000/api/v1/users/get-all-user'); // Replace with your API endpoint
        const data = await res.json();
        return data;
      }
      
    const data = fetchData()
    useEffect(() => {
        // Simulating an asynchronous process
        setTimeout(() => {
            setStatus("authenticated");
        }, 500);
    }, []);

    if (status !== "authenticated") {
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
            <div className='mt-5'>
                <table className='bg-dark_overlay min-w-[800px] text-center p-6'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index} className='hover'>
                                <th className='p-2'>{index + 1}</th>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.role}</td>
                                <td className='cursor-pointer p-2 '><div className='flex items-center gap-x-2'>
                                    <AiFillEdit /> <span>Edit</span>
                                </div></td>
                                <td className='cursor-pointer p-2 hover:text-red-500'>
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

export default Employeers;