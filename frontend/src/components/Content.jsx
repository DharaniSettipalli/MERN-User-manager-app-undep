import React from 'react'
import Sidebar from './Sidebar'
import AllUsers from './AllUsers'
import { useLocation } from 'react-router-dom'
import AddUser from './AddUser'

const Content = () => {
  const location = useLocation()
  const path = location.pathname
  return (
      <div className='flex gap-3'>
          <Sidebar />
      <div className='mt-8 w-full'>
        { 
          path.includes('addUser') ? <AddUser /> : ((path.includes('/') || path.includes('allUser')) && <AllUsers/>)
           
        }     
          </div>
    </div>
  )
}

export default Content
