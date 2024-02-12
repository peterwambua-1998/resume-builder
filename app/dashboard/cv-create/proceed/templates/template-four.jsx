import Image from "next/image";
import ProfilePhoto from "./template-one-components/profilePhoto";
import profImage from '@/app/images/profile.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Badge, Progress } from "react-daisyui";
import AboutMe from "./template-four-components/about";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import Award from "./template-four-components/awards";
import EducationWidget from "./template-four-components/education";
import ExperienceWidget from "./template-four-components/experience";
import Hobbies from "./template-four-components/hobbies";
import Languages from "./template-four-components/languages";
import Projects from "./template-four-components/projects";
import References from "./template-four-components/references";
import SkillWidget from "./template-four-components/skills";

const TemplateFour = ({ userId }) => {


    const [profile, setProfile] = useState(null);
    let [loading, setLoading] = useState(true);


    function getProfile() {
        try {
            const usb = onSnapshot(doc(db, 'profile', userId), doc => {
                if (doc.data()) {
                    console.log(doc.data());
                    setProfile(doc.data());
                } else {
                    setProfile(null);
                }
            });

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    return (
        <div className=" m-bg p-6">
            {/* top area */}
            <div className="md:grid md:grid-cols-5">
                <div className="col-span-1 pl-2 ">
                    <ProfilePhoto userId={userId} />
                </div>
                <div className="col-span-4 pl-10">
                    <div className="border-b  pb-5">
                        {
                            profile == null ? (<div>Loading...</div>) : (
                                <div>
                                    <p className="text-lg font-bold text-cyan-400">{profile.full_name}</p>
                                    <p className="font-semibold text-[#808080] mt-1">{profile.professionTitle}</p>
                                </div>
                               
                            )
                        }
                        
                       <AboutMe useId={userId} />
                    </div>
                   
                        {
                            profile == null ? (<div>Loading...</div>) : (
                                <div className="pt-5 grid grid-cols-3 text-sm">
                                    <p><span><FontAwesomeIcon icon={faPhone} className="text-cyan-400" /> {profile.phoneNumber}</span></p>
                                    <p><span><FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" /> {profile.email}</span></p>
                                    <p ><span><FontAwesomeIcon icon={faLocation} className="text-cyan-400" /> {profile.location}</span></p>
                                </div>
                               
                            )
                        }
                        
                </div>
            </div>
            {/* experience */}
            <ExperienceWidget user_id={userId} />
            {/* experience */}

            {/* education */}
            <EducationWidget user_id={userId} />
            {/* education */}

            {/* awards */}
            <Award userId={userId} />
            {/* awards */}

            {/* projects */}
            <Projects userId={userId} />

            {/* skills */}
            <SkillWidget user_id={userId} />
            {/* skills */}


            {/* hobbie */}

            <Hobbies userId={userId} />
            {/* hobbie */}

            {/* languages */}
            <Languages userId={userId} />
            {/* languages */}
            



            {/* references */}
            <References userId={userId}  />
            {/* references */}


        </div>
    );
}

export default TemplateFour;