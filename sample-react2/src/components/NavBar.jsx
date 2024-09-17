// import App from "../App"

const Nav=()=>{
    return(
        <>
        <div className=" bg-gray-600 list-none flex   flex-row items-center gap-[3rem] h-[3rem] w-[100vw] rounded-md shadow-md shadow-gray-700">
            <div className=" flex text-center w-[30%] justify-end">
              <h1 className="text-gray-100 text-2xl">Nivash</h1>
            </div>
            <div className=" w-[60%] flex justify-end gap-[2rem]">
              <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Profile</button>
              <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Project</button>
              <button type="button" className="bg-sky-500 h-[36px] w-[60px] block rounded-md">Contact</button>
            </div>
        </div>
        </>
    )
}
export {Nav}