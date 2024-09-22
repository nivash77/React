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
  if (!projectdata) {
    return "No data available";
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