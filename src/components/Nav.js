import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <div className='w-[100%] flex mt-[10px] shadow-lg pb-[20px]'>
        <div className='flex-row ml-[70px] w-[20%] items-center'>
          <h1 className='text-[#FF748D] text-2xl font-medium'>TweetX</h1>
        </div>
        <div className='flex flex-row items-center ml-[30%]'>
          <Link to="/feed" className='px-[12px] cursor-pointer'><a>Feed</a></Link>
          <Link to="/users" className='px-[12px] cursor-pointer'><a>Users</a></Link>
          <Link to="/profile" className='px-[12px] cursor-pointer'><a>Profile</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav