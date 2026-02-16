import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {

  return (
    <div>
          <ul className='h-screen w-[30vw] text-gray-700 flex flex-col items-center justify-start shadow-2xl mt-10 gap-3 shadow-black-50'>
              
          <Link to={'/allUser'}
>
          <li className='cursor-pointer hover:bg-green-100 w-full p-4'>
            All Users
          </li>
            
          </Link>
        <Link to='/addUser'>
              <li className='cursor-pointer  hover:bg-green-100 w-full p-4'>
                   Add User
          </li>
        </Link> 
      </ul>
    </div>
  )
}

export default Sidebar
