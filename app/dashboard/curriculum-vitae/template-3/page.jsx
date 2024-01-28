import { faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profileImg from '@/app/images/profile.jpeg';

const TemplateThree = () => {
    return (  
        <div className="bg-slate-300 pl-[10%] pr-[10%] pt-[5%] pb-[5%]">
            <div className="bg-white md:grid grid-cols-6">
                <div className="col-span-2">
                    <div >
                        <Image src={profileImg}  className="w-[100%]" />
                    </div>
                </div>
                <div className="col-span-4 pt-10 pl-20">
                    <p className="text-7xl font-semibold pb-5 text-green-700">Peter Wambua Mutuku</p>
                    <p className="w-full bg-slate-950 text-white text-2xl p-2">Project Manager</p>
                </div>
            </div>
        </div>
    );
}
 
export default TemplateThree;


