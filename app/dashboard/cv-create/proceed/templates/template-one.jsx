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
                    
                    <div className="grid grid-cols-3 md:grid md:grid-cols-3">
                        <div className="flex flex-col items-center w-full ">
                            <FontAwesomeIcon  icon={faLocationPin} className="text-amber-500 text-xs md:w-[22px]" />
                            <p className="text-[8px] md:text-base lg:text-base">location</p>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <FontAwesomeIcon  icon={faEnvelope} className="text-amber-500 text-xs md:w-[22px]" />
                            <p className="text-[8px] md:text-base lg:text-base">pwambua25@gmail.com</p>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <FontAwesomeIcon  icon={faPhone} className="text-amber-500 text-xs md:w-[22px]" />
                            <p className="text-[8px] md:text-base lg:text-base">+254 715 100 539</p>
                        </div>
                    </div>
                    
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
                        <div className="flex justify-center mb-2 text-[5px] md:text-base lg:text-base">
                            <ul style={{ listStyleType: 'disc' }} className="text-black pl-10 pr-10 ">
                                <li>Databases</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Skill 1</li>
                            </ul>
                        </div>
                        <div className="p-2 mb-2">
                            <button className="text-[5px] md:text-base lg:text-base bg-amber-500 pt-2 pb-2 pl-4 pr-4 rounded-full w-full text-black"><FontAwesomeIcon icon={faCirclePlus} /> Add Skill</button>
                        </div>
                        
                        <div className="bg-indigo-950 ">
                            <p className="font-bold text-[8px] md:text-lg lg:text-lg text-center">Awards</p>
                        </div>
                        <Award userId={userId} />
                        <div className="p-2 mb-2">
                            <button onClick={toggleVisibleEdu} className="text-[5px] md:text-base lg:text-base bg-amber-500 pt-2 pb-2 pl-4 pr-4 rounded-full w-full text-black"><FontAwesomeIcon icon={faCirclePlus} /> Add Education</button>
                        </div>
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