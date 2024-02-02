'use client'
import { db } from "@/app/firebase/firebase";
import { faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, onSnapshot, } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { Skeleton, Button, Modal, Textarea, Accordion, Badge, Input } from "react-daisyui";

const Profile = ({userId}) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    function getProfile() {
        try {
            const usb = onSnapshot(doc(db, 'profile', userId), doc => {
                if (doc.data()) {
                    setProfile(doc.data());
                } else {
                    setProfile(null);
                }
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

   

    useEffect(() => {
        getProfile();
    }, [])

    return (  
        <div className="mb-3">
                {
                    loading == true ? 
                    (
                    <div>
                        <Skeleton className="h-4 w-full bg-blue-800"></Skeleton>
                    </div>) :
                        
                    (
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
                    )
                }
               
        </div>
    );
}
 
export default Profile;