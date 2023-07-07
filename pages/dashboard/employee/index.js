import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/common/DashboardLayout';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

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
                <table className='bg-dark_overlay min-w-[700px] text-center p-6'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Knowledge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index} className='hover'>
                                <th className='p-2'>{index + 1}</th>
                                <td className='p-2'>{user.name}</td>
                                <td className='p-2'>{user.role}</td>
                                <td className='cursor-pointer p-2'>Delete</td>
                                <td className='cursor-pointer p-2'>Access</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default Employeers;