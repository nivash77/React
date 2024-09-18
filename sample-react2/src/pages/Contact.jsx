import { User } from "lucide-react"
import { Nav } from "../components/NavBar"
import { useState } from "react"
const Contact=()=>{
    const [visi,setvisi]=useState(false)
    return(
        <>
        <Nav />
        {
        visi && (
            <>
            <div className="h-screen w-screen flex  flex-col justify-center items-center bg-zinc-300 z-50">
         
            <div className="h-4/6 w-2/6  bg-gray-500  rounded-md flex flex-col justify-center items-center gap-4 z-50">
           
           
            <input type="text" placeholder="NAME"  required className="h-8 w-3/6  hover:border-b-4 hover:border-b-gray-700 rounded-sm"/>
            <input type="number" placeholder="AGE" className="h-8 w-3/6 hover:border-b-4 hover:border-b-gray-700 rounded-sm"/>
            <input type="email" placeholder="Email" className="h-8 w-3/6 hover:border-b-4  hover:border-b-gray-700 rounded-sm "/>
            <input type="password" placeholder="Password" className="h-8 w-3/6 hover:border-b-4  hover:border-b-gray-700 rounded-sm "/>
             <button onClick={()=>setvisi(!visi)} className= " w-1/5 block bg-gray-700  text-white p-2 rounded-md hover:bg-gray-600" >Sign-up </button>
            </div>
          </div>
          </>
        )
    }
        <div className=' flex items-center text-black -z-10'>
            <button onClick={()=>setvisi(true)}><User/></button></div>
        </>
    )
}
export {Contact}