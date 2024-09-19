// import { useState } from 'react'
import { Nav } from "../components/NavBar";
import { Img } from "../components/Images";
import { Tech } from "../components/Tech";
const Profile=()=>{
  return(
    <>
    <div className="h-fit">
        <Nav/>
    <div className=" w-[80%] min-h-fit flex justify-center gap-[5rem] h-[80vh] pt-7">
    <Img/></div>
    <div>
    <Tech/></div>
    </div>
    </>
  )
}
export {Profile};