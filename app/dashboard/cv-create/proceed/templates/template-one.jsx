'use client'
import { faCirclePlus, faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profileImg from '@/app/images/profile.jpeg';
import { Button, Modal, Input, Skeleton } from "react-daisyui";
import { useState } from "react";
import AboutMe from "./template-one-components/about";
import { auth } from "@/app/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ExperienceWidget from "./template-one-components/experience";
import EducationWidget from "./template-one-components/education";
import References from "./template-one-components/references";
import Award from "./template-one-components/achievements";
import SkillWidget from "./template-one-components/skills";
import Profile from "./template-one-components/profile";

const TemplateOne = ({userId}) => {
    const [user, setUser] = useState(userId);
    const [visibleEdu, setVisibleEdu] = useState(false);
    const toggleVisibleEdu = () => {
        setVisibleEdu(!visibleEdu);
    };


    return (  
            <div className=" bg-white ">
                {/* top dark area */}
                <div className=" bg-indigo-950 text-white p-2 md:p-10 lg:p-10">
                    <p className="font-bold text-base md:text-3xl lg:text-3xl mb-3 text-center">Peter Wambua Mutuku</p>
                    <div className="flex justify-center">
                    <div className="dashed-text-container mb-3 w-full md:w-[90%] lg:w-[90%]">
                        <div className="dashed-line"></div>
                        <span className="dashed-text font-semibold text-[10px] md:text-lg lg:text-lg ml-3 mr-3">data analyst</span>
                        <div className="dashed-line"></div>
                    </div>
                    </div>
                    
                   <Profile userId={userId} />
                    
                </div>
                {/* top dark area */}

                {/* profile photo and about */}
                <div className="grid grid-cols-4 md:grid md:grid-cols-4 mt-5">
                    <div className="pl-5 pr-0 md:pl-20 md:pr-0 lg:pl-20 lg:pr-0">
                        <Image alt="profile" src={profileImg} width={120} height={120} className="rounded-full w-[40px] h-[40px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px]"  />
                    </div>
                    <div className="col-span-3 md:pr-10 lg:pr-10">
                        <p className="mb-2 font-bold text-indigo-950 text-xs md:text-lg lg:text-lg">Profile </p>
                        
                        <AboutMe useId={userId} />
                        
                        
                    </div>
                </div>
                {/* profile photo and about */}

                {/* grid */}
                <div className="grid grid-cols-4 md:grid md:grid-cols-4 mt-5">
                    <div className=" text-white border-r border-amber-400">
                        <div className="bg-indigo-950">
                            <p className="font-bold text-[8px] md:text-lg lg:text-lg text-center">Skills</p>
                        </div>
                        
                        <SkillWidget user_id={userId} />
                        
                        
                        <div className="bg-indigo-950 ">
                            <p className="font-bold text-[8px] md:text-lg lg:text-lg text-center">Awards</p>
                        </div>
                        <Award userId={userId} />
                        
                    </div>
                    <div className="col-span-3 pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-10 lg:pr-10 border-t border-amber-400">
                        <p className="font-bold text-[12px] md:text-lg lg:text-lg text-center mt-2 border-b">Work Experience</p>
                        <ExperienceWidget user_id={userId} />

                        <p className="font-bold text-[12px] md:text-lg lg:text-lg text-center mt-2 border-b">Education</p>
                        <EducationWidget user_id={userId} />


                        <p className="font-bold text-[12px] md:text-lg lg:text-lg text-center mt-5 border-b mb-5">References</p>
                        <References userId={userId} />                            
                    </div>
                </div>
                {/* grid */}
            </div>
    );
}
 
export default TemplateOne;