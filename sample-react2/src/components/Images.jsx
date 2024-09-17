const Img=()=>{
    return(
        <>
        <div className="flex flex-row justify-center gap-[9rem]">
        <div className="flex h-[24rem] w-[24rem]   justify-items-start">
          <img src="src\assets\img\WhatsApp Image 2024-09-11 at 6.02.08 PM.jpeg" className="rounded-[60%]"></img>  
        </div>
        <div className="flex flex-col justify-center  gap-[1rem] w-[20vw] h-[24rem] mt-0 ">
        <div className=" flex flex-col justify-center gap-[2rem]">
            <h2 className="font-bold text-lg pl-20">Who I'M</h2>
            <h1 className="font-bold text-5xl">Nivash M</h1>
            <h2 className="align-middle text-[1.75rem]  relative bottom-[1rem]">FullStack Enthusiast</h2></div>
            <h2 className="font-bold">About ME</h2>
        <div className="border-1 align-middle w-[25vw] h-[6rem]">
            <p>
            As a Student at Sri Shakthi Institute of Engineering and Technology. I am actively developing my skills related to software, web and java developer
            </p>
        </div>
        </div>
        </div>
        </>
    )
}
export {Img}