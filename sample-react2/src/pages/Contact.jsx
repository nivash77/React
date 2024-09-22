

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
const Contact=()=>{

    return(
        <>
        <div className="flex flex-col  justify-center items-center h-[80vh] gap-[2rem]">
          <div className="flex flex-row gap-[2rem]">
        <FontAwesomeIcon icon={faLinkedin}  className="size-16"/>
        <IoMdMail className="size-16"/>
        </div>
        <div className="flex flex-row gap-[2rem]">
        <FaPhone className="size-16" />
       <a href="github.com/nivash77"> <FaGithub className="size-16"/></a>
        </div>
        </div>
        </>
    )
}
export {Contact}