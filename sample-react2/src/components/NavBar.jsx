// import App from "../App"
import React,{useRef} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react"
import { User,Cross } from 'lucide-react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { Navigate } from 'react-router-dom';
const Nav=()=>{
    const nav=useNavigate()
  const NavLinks = [{
    title: "Profile",
    path: "/"
},
{
    title:"Skills",
    path:"/Skills"
},
{
    title: "Project",
    path: "/project"
},
{
    title: "Contact",
    path: "/contact"
}
]
const mail=useRef(null)
const name=useRef(null)
const handleLogin=(e)=>{
  e.preventDefault()

  setvisi(false)
  nav("/Contact")
  console.log(mail.current.value,name.current.value)
}
const [visi,setvisi]=useState(false)
    return(
        <>
        <div className='flex justify-center pt-3 sticky pb-3'>
        <div className=" bg-gray-700 list-none flex   flex-row items-center gap-[3rem] h-[3rem] w-[100vw] rounded-md shadow-md shadow-gray-700">
            <div className=" flex text-center w-[30%] justify-end">
              <h1 className="text-gray-100 text-2xl">Nivash</h1>
            </div>
            <div className=" w-[60%] flex justify-end gap-[2rem]">
            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>
                                     <button type="button" className=" h-[36px] w-[60px] block rounded-md text-gray-500 font-bold hover:border-b-2  hover:border-slate-200 ">{navdata.title}</button>
                                    </NavLink>
                                ))
                            }
                    {/* <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">{navdata.title}</button>
                   <Link to={'/'}>
              <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Profile</button></Link>
            <Link to={'/Project'}> <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Project</button></Link>
            <Link to={'/Contact'}><button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Contact</button></Link> */}
            <button ><User className='text-slate-100' onClick={()=>setvisi(true)}/></button>
              
            </div>
        </div>
        </div>
        {
          visi && (
           
            <>
           <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                <div className=" h-[60%] w-[25%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                    <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-black  text-xl font-bold ">
                        <div className="w-2/3 flex justify-center">
                            Login
                        </div>
                        <div className="w-2/3 flex justify-end">
                            <IoCloseCircleOutline  onClick={()=>setvisi(!visi)}/>
                        </div>
                    </div>
                    <div className="w-full h-[85%] flex flex-row justify-center items-center">
                        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                            <input type="text" ref={name} name="" id="name" placeholder="Name" required className="p-3 bg-[#e7e8ea] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500 rounded-md" />
                            <input type="email" ref={mail} name="" id="email" placeholder="email"  required className="p-3 bg-[#e7e8ea] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500 rounded-md"/>

                            <button type="submit" className="bg-gray-600 p-3 text-black w-full h-[3rem] rounded-sm text-lg font-bold hover:bg-gray-500 shadow-lg shadow-slate-400">Login</button>
                        </form>
                    </div>
                    
                </div>
            </div>

        </>
        )
        }
        </>
    )
}
export {Nav}