import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../../components/common/DashboardLayout';
import axios from 'axios';
import { baseUrl, getHeaders } from '../../../../api/api';
import Swal from 'sweetalert2';

const departments = [
    "export",
    "legal",
    "accounts",
    "it",
    "hr",
    "internal audit",
    "yarn sales",
    "co-ordination",
    "foreign",
    "local",
    "apparel",
    "admin",
    "finance",
    "sustainability",
    "commercial",
    "import-banking"
];
const allRole = [
    "admin",
    "user"
]
const knowledges = [
    "basis", "abap", 'fico', 'pm', 'hcm', 'sd', 'mm',
]
const EditUser = () => {
    const router = useRouter()
    const id = router.query.editUser
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const [department, setDepartment] = useState(user?.department)
    const [role, setRole] = useState(user?.role)
    const [knowledgeAccesses, setKnowlege] = useState()
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
    }, [id])

    const handleUpdateUser = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const name = form.name.value
        const emplyeeid = form.emplyeeid.value
        const email = form.email.value
        const password = form.password.value
        console.log(form.department.value)
        let updateUser = {}
        if (name !== user?.name) {
            updateUser.name = name
        }
        if (emplyeeid !== user?.emplyeeid) {
            updateUser.emplyeeid = emplyeeid
        }
        if (email !== user?.email) {
            updateUser.email = email
        }
        if (password !== '') {
            updateUser.password = password
        }
        if (department !== user?.department || department !== "") {
            updateUser.department = department
        }
        if (role !== user?.role || role !== "") {
            updateUser.role = role
        }
        if (knowledgeAccesses !== user?.knowledgeAccesses.includes(knowledgeAccesses) && knowledgeAccesses !== "") {
            updateUser.knowledgeAccesses = knowledgeAccesses
        }
        try {
            const response = await axios.put(`${baseUrl}/users/update-one-user/${id}`, updateUser,
                { headers: getHeaders() })
            setLoading(false)
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            router.push('/dashboard/employee')
        } catch (error) {
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    }
    console.log(user)
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
            <div className='p-12 bg-white text-black rounded-lg border-l-3 border-r-3 border-color_pink'>
                <form onSubmit={handleUpdateUser}>
                    <div className='grid grid-cols-2 gap-12'>
                        <div className='flex flex-col'>
                            <label className='font-semibold cursor-pointer' htmlFor='name'>Name</label>
                            <input id='name' name='name' defaultValue={user?.name} className='border-2 border-color-pink p-2 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold cursor-pointer' htmlFor='emplyeeid'>employeeId</label>
                            <input id='emplyeeid' name='emplyeeid' defaultValue={user?.employeeId} className='border-2 border-color-pink p-2 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold cursor-pointer' htmlFor='email'>Email</label>
                            <input id='email' name='email' defaultValue={user?.email} className='border-2 border-color-pink p-2 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold cursor-pointer' htmlFor='password'>Password</label>
                            <input id='password' name='password' placeholder='Password is not showing' className='border-2 border-color-pink p-2 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold cursor-pointer' htmlFor='department'>Department</label>
                            <select onChange={(e) => setDepartment(e.target.value)} defaultValue={user?.department} name='department' className='border-2 border-color-pink p-2 outline-none'>
                                <option defaultChecked value={user?.department}>{user?.department}</option>
                                {departments?.map((department, index) => <option key={index} value={department}>{department}</option>)}
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold cursor-pointer' htmlFor='role'>Role</label>
                            <select onChange={(e) => setRole(e.target.value)} id='role' name='role' className='border-2 border-color-pink p-2 outline-none'>
                                <option defaultChecked value={user?.role}>{user?.role}</option>
                                {allRole?.map((role, index) => <option key={index} value={role}  >{role}</option>)}
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold cursor-pointer' htmlFor='department'>Knowledge Access</label>
                            <select onChange={(e) => setKnowlege(e.target.value)} name='department' className='border-2 border-color-pink p-2 outline-none'>
                                {knowledges.map((knowledge, index) => <option key={index} value={knowledge} >{knowledge}</option>)}
                            </select>
                        </div>
                        {
                            user?.knowledgeAccesses?.length > 0 &&
                            <div>
                                <h4 className='font-semibold'>Accessed</h4>
                                <ul>
                                    {
                                        user?.knowledgeAccesses?.map((knw, index) => <li key={index}>{knw}</li>)
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                    <button type='submit' className="mx-auto block mt-5 px-8 py-4 rounded-xl bg-color_brand text-color_white hover:bg-color_white hover:text-color_brand transition-all duration-500">Update User</button>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default EditUser;