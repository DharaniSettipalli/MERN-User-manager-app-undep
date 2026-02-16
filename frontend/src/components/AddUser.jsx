import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { firstNames, lastNames, phoneNumbers, addresses, dates } from '../utils'
import { userSchema } from '../utils'
import { url } from '../utils'


const AddUser = () => {
    const [user, setUser] = useState({})
    const location = useLocation();
    const [update, setUpdate] = useState(false)
    const [error, setError] = useState('');
    const alphabetRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-z]+$/i // A common, basic regex for email validations

    const navigate = useNavigate()


    const handleChange = (e) => {

        //phone number validation
        if (e.target.name === 'phoneNumber') {
            if (e.target.value.length !== 10 || e.target.value < 0) {
                setError('Please enter valid 10 digit number')
            }
            else {
                setError('')
            }
        }

        //first name validation
        if (e.target.name === 'firstName') {

            // Test if the new value matches the regex
            if (!alphabetRegex.test(e.target.value)) {
                setError('Enter a valid first name, should contain only alphabets')
            }
            else {
                setError('')
            }

        }

        if (e.target.name === 'lastName') {

            // Test if the new value matches the regex
            if (!alphabetRegex.test(e.target.value)) {
                setError('Enter a valid last name, should contain only alphabets')
            }
            else {
                setError('')
            }

        }
        if (e.target.name === 'email') {
            if (!emailRegex.test(e.target.value)) {
                setError('Invalid mail format, please enter valid email');
            } else {
                setError('');
            }

        }
        if (e.target.name === 'gender') {
            if (e.target.value.toLowerCase() === 'male' || e.target.value.toLowerCase() === 'female' ) {
                setError('')
            }
            else {
                setError('Gender should be either male or female')
            }
        }
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        try {
            e.preventDefault()
            if (user.phoneNumber.length === 10 && !error) {
                //alert(`Submitted phone number: ${phoneNumber}`);
                // Proceed with form submission logic (e.g., API call)
                if (!update) {
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    }
                    const response = await fetch(`${url}create/`, options)
                    const data1 = await response.json()
                    toast.success(data1.message, {
                        autoClose: 3000
                    })
                }
                else {
                    const options = {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    }
                    const response = await fetch(`${url}update/${location.state.user._id}`, options)
                    const data = await response.json()
                    toast.success(data.message, {
                        autoClose: 3000
                    })
                }
                setUser({
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    address: "",
                    dob: ''
                })
                setTimeout(() => {
                    navigate('/allUser')
                }, 1000);

            } else {
                setError('Please enter a valid 10-digit phone number.');
            }

        }

        catch (error) {
            toast.error(error, {
                autoClose: 3000
            })
        }

    }

    const pickRandom = (list) => {
        const randomItem = list[Math.floor(Math.random() * list.length)]
        return randomItem
    }


    const addMockData = () => {
        userSchema.forEach((object) => {
            if (object.name !== 'email') {
                user[object.name] = pickRandom(object.list)
                setUser({ ...user, [object.name]: pickRandom(object.list) })
            }
            else {
                user[object.name] = user.firstName.toLowerCase() + user.lastName.toLowerCase() + '@gmail.com'
                setUser({
                    ...user,
                    email: `${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}@gmail.com`
                })

            }
        })


    }


    useEffect(() => {
        if (location.state) {
            setUpdate(true)
            if (location.state.user.dob) {
                location.state.user.dob = location.state.user.dob.slice(0, 10)
            }
            setUser(location.state.user)
        }
        else {
            setUpdate(false),
                setUser({
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    address: "",
                    dob:''
                })
        }
    }, [location.state])


    return (
        <>
            <div className='w-2/3'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl mb-5'>
                        {
                            update ? 'Update user form' : 'Add User Form'
                        }
                    </h1>
                    {
                        !update && <button
                            className='text-sm bg-brand bg-green-300 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'
                            onClick={addMockData}
                        >
                            Test with mock data
                        </button>
                    }



                </div>
                {/* <form>
                    {
                        userSchema.map((field, index) => { <
                            <label htmlFor={field.name} className="block mb-2.5 text-sm font-medium text-heading">Your {field.name} <span className='text-red-600 text-lg'>*</span> </label>
                            {
                                return (

                                    field.type === "textarea" ? (
                                        <textarea
                                            name={field.name}
                                            value={field.name || ""}
                                            onChange={handleChange}
                                            key={index}
                                            required={field.required}
                                            id={field.name}
                                            className="block mb-2.5 text-sm font-medium text-heading"
                                        />
                                    ) : (
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={field.name || ""}
                                            onChange={handleChange}
                                            key={index}
                                            required={field.required}
                                            id={field.name}
                                            className="block mb-2.5 text-sm font-medium text-heading"
                                        />
                                    ))
                            }
                        }
                        )
                    }

                </form> */}

                <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                    {error && <p className='text-red-500 text-xs mb-10 mt-10'>{error}</p>}
                    {
                        userSchema.map((field, index) => {
                            if (field.name !== 'list') {
                                return < div className='mb-8' key={index}>
                                    <label htmlFor={field.name} className="block mb-2.5 text-sm font-medium text-heading">Your {field.label}
                                        {field.required && <span className='text-red-600 text-lg'>*</span>
                                        }

                                    </label>
                                    {
                                        field.type === 'textarea' ? (
                                            <textarea
                                                name={field.name}
                                                value={user[field.name]}
                                                onChange={handleChange}
                                                required={field.required}
                                                className='text-sm w-full border'
                                            />
                                        ) : (
                                            <input
                                                onChange={handleChange}
                                                required={field.required}
                                                name={field.name}
                                                type={field.type}
                                                id={field.name}
                                                value={user[field.name]}
                                                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                                                placeholder={field.label}
                                            />
                                        )
                                    }





                                </div>
                            }


                        })
                    }
                    <button type="submit" className=" bg-brand bg-green-300 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        {
                            update ? 'Update' : "Submit"
                        }
                    </button>

                    {/* <div className="mb-5">
                        <label htmlFor="lastName" className="block mb-2.5 text-sm font-medium text-heading">Your last name <span className='text-red-600 text-lg'>*</span></label>
                        {secondError && <p className='text-red-500 text-xs'>{secondError}</p>}
                        <input onChange={handleChange} required name='lastName' type="text" id="lastName" value={user.lastName} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="enter last name"/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phoneNumber" className="block mb-2.5 text-sm font-medium text-heading">Your phone number <span className='text-red-600 text-lg'>*</span></label>
                        {error && <p className='text-red-500 text-xs'>{error}</p>}
                        <input onChange={handleChange}

                            required type="number" name='phoneNumber' id="phoneNumber" min={0} value={user.phoneNumber} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="enter phone number"/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your Email <span className='text-red-600 text-lg'>*</span></label>
                        {emailError && <p className='text-red-500 text-xs'>{emailError}</p>}
                        <input onChange={handleChange} required type="text" name='email' id="email" value={user.email} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="enter email"/>
                    </div>
                    <button type="submit" className=" bg-brand bg-green-300 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        {
                            update ? 'Update' : "Submit"
                        }
                    </button> */}
                </form>
                <ToastContainer />
            </div>

        </>
    )
}

export default AddUser
