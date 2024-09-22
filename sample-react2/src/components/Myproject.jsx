import { Pencil, Trash } from "lucide-react"
import React from "react"
import { deleteProject } from "../services/api"
export const Myproject=({ title, desc, pid, cover, id })=>{
    const handledelete=async()=>{
        try{
            const res=await deleteProject(id)
            if(res.status==200){
                console.log("delete");
            }
        }catch(error){
            console.log(error);
        }
    }
    return(
        <>
            <div className="service-card w-[500px] h-[500px] shadow-md shadow-orange-50 flex flex-col items-start gap-2 hover:bg-gray-500">
                <img src={cover} alt={title} className="h-[50%] w-[100%] relative"/>
                <p className="font-bold text-2xl hover:text-gray-200">{title}</p>
                <div className="h-full">
                <p className="text-xl" > {desc}</p></div>
                <div className="w-full flex flex-row justify-center items-center gap-2 pb-5">
                    <div className="w-[80%] flex justify-center h-[10%] items-center gap-3">
                        <button className="w-12 h-12 border-2 font-bold  p-2 border-red-600 rounded-full"><Pencil className="w-6 h-6 text-red-200"/></button>
                        <button className="w-12 h-12 border-2 border-red-600 p-2 rounded-full" onClick={handledelete}><Trash className="w-6 h-6 text-red-500"/></button>
                    </div>
                    <p className="text-gray-400 text-5xl">{parseInt(pid,10)+1}</p>
                </div>
            </div>
        </>
    )

}