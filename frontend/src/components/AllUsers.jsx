import React, { useState, useEffect } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { url } from '../utils';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const fetchUsers = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch(`${url}`, options);
            const data = response.json()
            data.then((allUsers) => {
                setUsers(allUsers.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch(`${url}/delete/${id}`, options);
            const data = response.json()
            data.then((success) => {
                fetchUsers()
                toast.success(success.message, {
                    autoClose: 3000
                })
            })
            
            
        } catch (error) {
            toast.error(error, {
                autoClose: 3000
            })
        }
    }

    const handleUpdate = async (user) => {
        navigate('/addUser', { state: { 'user': { ...user , update: true}}})
    }
    

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default'>
            <table className='table-auto w-full text-sm text-left rtl:text-right text-body'>
                <thead className='text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default'>
                    <tr
                        className=''>
                        <th scope="col" className="px-6 py-3 font-medium">Name</th>
                        <th scope="col" className="px-6 py-3 font-medium">Phone</th>
                        <th scope="col" className="px-6 py-3 font-medium">email</th>
                        <th scope="col" className="px-6 py-3 font-medium">Actions</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        users && users.map((user, index) => {
                            const bgClass = (index % 2 === 0) ? 'bg-teal-50' : ''
                            return <tr className={`bg-neutral-primary border-b border-default ${bgClass}`} key={index}>
                                    <td className='p-3 px-6 py-4'>{user.firstName + ' ' + user.lastName}</td>
                                    <td className='p-3 px-6 py-4'>{user.phoneNumber}</td>
                                <td className='p-3 px-6 py-4'>{user.email}</td>
                                <td className='p-3 px-6 py-4 flex gap-2'>
                                    <button className='text-lg text-blue-800 cursor-pointer' onClick={()=> handleUpdate(user)}><MdEdit /></button>
                                    <button className='text-lg text-red-800 bg  cursor-pointer' onClick={()=>handleDelete(user._id)}><MdDelete /></button>
                                </td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
            <ToastContainer />
        </div>
        
    )
}

export default AllUsers
