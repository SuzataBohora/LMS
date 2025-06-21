import React from 'react'
import { Link } from 'react-router-dom'
import std from '../../assets/std.png'
import User from '../../assets/User.png';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const Navbar = () => {


  const {navigate, isEducator, backendUrl, setIsEducator, getToken } = useContext(AppContext)

const isCourseListPage = location.pathname.includes('/courselist');

const {openSignIn} = useClerk()
const {user} = useUser()

const becomeEducator = async ()=>{
  try {
    if(isEducator){
      navigate('/educator')
      return;
    }
    const token = await getToken()
    const { data } = await axios.get(backendUrl + '/api/educator/update-role', {headers: {Authorization: `Bearer ${token}`}})

    if (data.success){
      setIsEducator(true)
      toast.success(data.message)
    }else{
      toast.success(data.message)
    }
  } catch (error) {
      toast.error(error. message)
    
  }
}


  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <div className="flex items-center space-x-2">
         <img onClick={()=> navigate('/')}  src={std} alt="logo" className="w-10 h-10 cursor-pointer" />
         <h1 className="text-xl font-semibold text-gray-800">Learnsy</h1>
      </div>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'> 
            { user &&
            <>
              <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
            <Link to='/Myenrollments'> My Enrollments </Link>
            </>
            }
        </div>
        { user ? <UserButton/> : 
        <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
      </div>
    {/*Phone screens*/}
    <div className='md:hidden flex items-centergap-2 gap-5text-gray-500'>
        <div>
         <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
          <Link to='/Myenrollments'> My Enrollments </Link>
        </div> 
        {
          user ? <UserButton/>        
          :   <button onClick={()=> openSignIn()}> <img src={ User } alt='User Icon' className='w-15 h-7 lg:w-32 cursor-pointer' /> </button>
    }     
    </div>








    </div>
  )
}


export default Navbar;