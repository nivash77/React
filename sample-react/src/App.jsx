// import React from 'react'

import Login from "./components/login"


const App=()=>{
  const nav="Sign-Up"
  const arr=['react','angular','js','ts','html','css']
    return (
        <>
        <div className="h-screen w-screen flex  flex-col justify-center items-center bg-zinc-300">
         
          <div className="h-4/6 w-2/6  bg-gray-500  rounded-md flex flex-col justify-center items-center gap-4">
          <Login login={nav} arry={arr} />
         
          <input type="text" placeholder="NAME"  required className="h-8 w-3/6  hover:border-b-4 hover:border-b-gray-700 rounded-sm"/>
          <input type="number" placeholder="AGE" className="h-8 w-3/6 hover:border-b-4 hover:border-b-gray-700 rounded-sm"/>
          <input type="email" placeholder="Email" className="h-8 w-3/6 hover:border-b-4  hover:border-b-gray-700 rounded-sm "/>
          <input type="password" placeholder="Password" className="h-8 w-3/6 hover:border-b-4  hover:border-b-gray-700 rounded-sm "/>
           <button className= " w-1/5 block bg-gray-700  text-white p-2 rounded-md hover:bg-gray-600" >Sign-up </button>
          </div>
        </div>
        </>
      )
    
}
export default App