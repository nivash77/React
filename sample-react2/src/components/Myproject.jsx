export const Myproject=()=>{
    return(
        <>
         <div className="flex flex-row gap-[3rem] justify-center">
        <div className="flex flex-col justify-center  w-[20rem] h-[30rem] align-middle  ">
            <div className="flex justify-center">
            <img src="src\assets\img\Screenshot 2024-09-19 160732.png" className="w-[19rem] h-[10rem] justify-center"/>
            </div>
            <div className="flex flex-col justify-center items-center">
            <h2 className="p-2 font-bold font-serif">AI CHAT</h2>
            </div>
            <p className="font-serif"> The objective of this project is to develop a chat AI web application that leverages the capabilities of Gemini AI, integrated with the Streamlit framework. 
                This application aims to provide users with an interactive and responsive platform for engaging in natural language conversations, offering assistance, 
                information retrieval, and personalized responses based on user input.</p>
        </div>
        <div className="flex flex-col justify-center  w-[22rem] h-[30rem] align-middle ">
            <div className="flex justify-center">
            <img src="src\assets\img\Screenshot 2024-09-19 160543.png" className="w-[19rem] h-[10rem] justify-center"/>
            </div>
            <div className="flex flex-col justify-center items-center">
            <h2 className="p-2 font-bold font-serif">IMAGE GENERATING</h2>
            </div>
            <p className="font-serif"> The goal of this project is to develop an image-generating web application that transforms textual descriptions into visual representations.
                 By leveraging advanced AI models take the ai model from online website of Open source and modify it, the application will allow users to input prompts and receive generated images that accurately 
                 reflect their descriptions and integrated with the Streamlit framework.</p>
        </div>
        </div>
        </>
    )
}