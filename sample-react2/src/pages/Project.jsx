import { useEffect, useState } from "react"

import {Myproject} from "../components/Myproject";
import { getProject } from "../services/api"
import {Addprojectcomponents} from "../components/Addprojectcomponents"

const Project = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProject()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);

    }
  }
  console.log(projectdata)
  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata) 
    {
    return (
      <>
   <div
    role="alert"
    class="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      class="h-5 w-5 flex-shrink-0 mr-2 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p class="text-xs font-semibold">
     NO Data or data loding
    </p>
  </div>
  </>
    )
    
  }
  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center pb-8">
        <div className="w-full h-[10%] flex justify-center items-center">
          <Addprojectcomponents />
        </div>

        {
          projectdata.map((data, index) => (
            <Myproject title={data.title} desc={data.desc} key={index} pid={index} cover={data.cover} id={data.id} />
          ))
        }
      </div>
    </>
  )
}

export  {Project}