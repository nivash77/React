// import App from "../App"
import { User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
const Nav=()=>{
    return(
        <>
        <div className=" bg-gray-600 list-none flex   flex-row items-center gap-[3rem] h-[3rem] w-[100vw] rounded-md shadow-md shadow-gray-700">
            <div className=" flex text-center w-[30%] justify-end">
              <h1 className="text-gray-100 text-2xl">Nivash</h1>
            </div>
            <div className=" w-[60%] flex justify-end gap-[2rem]">
              <Link to={'/'}>
              <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Profile</button></Link>
            <Link to={'/Project'}> <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Project</button></Link>
            <Link to={'/Contact'}><button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Contact</button></Link>
            <div className=' flex items-center text-gray-50'><button><User/></button></div>
              
            </div>
        </div>
        </>
    )
}
export {Nav}