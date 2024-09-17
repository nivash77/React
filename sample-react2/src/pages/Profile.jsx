// import { useState } from 'react'
import { Nav } from "../components/NavBar";
import { Img } from "../components/Images";
const Profile=()=>{
  return(
    <>
    <div className='flex justify-center pt-3'>
        <Nav/>
    </div>
    <div className=" w-[80%] min-h-fit flex justify-center gap-[5rem] h-[80vh] pt-10">
    <Img/></div>
    
    </>
  )
}
export {Profile};