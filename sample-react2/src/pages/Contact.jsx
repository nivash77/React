import { User } from "lucide-react"
import { Nav } from "../components/NavBar"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
const Contact=()=>{

    return(
        <>
        <Nav />
        <div className="flex flex-col  justify-center items-center h-[80vh] gap-[2rem]">
          <div className="flex flex-row gap-[2rem]">
        <FontAwesomeIcon icon={faLinkedin}  className="size-16"/>
        <IoMdMail className="size-16"/>
        </div>
        <div className="flex flex-row gap-[2rem]">
        <FaPhone className="size-16" />
        <FaGithub className="size-16"/>
        </div>
        </div>
        </>
    )
}
export {Contact}