// import App from "../App"
import React,{useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react"
import { User,Cross } from 'lucide-react';
import { IoCloseCircleOutline } from "react-icons/io5";
// import { Link, NavLink } from 'react-router-dom';
const Nav=()=>{
  const NavLinks = [{
    title: "Profile",
    path: "/"
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
const pass=useRef(null)
const handleLogin=(e)=>{
  e.preventDefault()
  console.log(mail.current.value,pass.current.value)
}
const [visi,setvisi]=useState(false)
    return(
        <>
        <div className='flex justify-center pt-3'>
        <div className=" bg-gray-600 list-none flex   flex-row items-center gap-[3rem] h-[3rem] w-[100vw] rounded-md shadow-md shadow-gray-700">
            <div className=" flex text-center w-[30%] justify-end">
              <h1 className="text-gray-100 text-2xl">Nivash</h1>
            </div>
            <div className=" w-[60%] flex justify-end gap-[2rem]">
            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>
                                     <button type="button" className=" h-[36px] w-[60px] block rounded-md text-gray-400">{navdata.title}</button>
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
                <div className=" h-[40%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                    <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-gray-500 text-xl font-bold ">
                        <div className="w-1/2">
                            Login
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <IoCloseCircleOutline  onClick={()=>setvisi(!visi)}/>
                        </div>
                    </div>
                    <div className="w-full h-[85%] flex flex-row justify-center items-center">
                        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                            <input type="email" ref={mail} name="" id="email" placeholder="email" className="p-3 bg-[#b2b2b2] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500" required />
                            <input type="text" ref={pass} name="" id="name" placeholder="Name" className="p-3 bg-[#b2b2b2] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500" required />

                            <button type="submit" className="bg-green-400 p-3 text-black w-full h-[3rem] rounded-sm text-lg font-bold hover:bg-green-300" onClick={()=>setvisi(!visi)}>Login</button>
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