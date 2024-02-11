import Image from "next/image";
import ProfilePhoto from "./template-one-components/profilePhoto";
import profImage from '@/app/images/profile.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Badge, Progress } from "react-daisyui";
import AboutMe from "./template-four-components/about";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";

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
                        
                       <AboutMe userId={userId} />
                    </div>
                    <div className="pt-5 grid grid-cols-2 text-sm">
                        {
                            profile == null ? (<div>Loading...</div>) : (
                                <div>
                                    <p><span><FontAwesomeIcon icon={faPhone} className="text-cyan-400" /> {profile.phoneNumber}</span></p>
                                    <p><span><FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" /> {profile.email}</span></p>
                                    <p className="mt-4"><span><FontAwesomeIcon icon={faLocation} className="text-cyan-400" /> {profile.location}</span></p>
                                </div>
                               
                            )
                        }
                        
                    </div>
                </div>
            </div>
            <div className="md:grid md:grid-cols-5 mt-10">
                <div className="col-span-1 pl-2 mb-5">
                </div>
                <div className="col-span-4 pl-10 mb-5">
                    <p className="font-bold text-lg  border-b">Work Experience</p>
                </div>
                <div className="col-span-1 pl-2 text-right mb-6">
                    <p>Google Inc</p>
                    <p className="text-xs text-[#808080]">2015 - 2016</p>
                </div>
                <div className="col-span-4 pl-10 mb-6">
                    <p>Business Consultant</p>
                    <p className="text-sm text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illo dolore suscipit veniam atque earum ea minus saepe non. Beatae vitae, similique aut tempora repellendus vel magnam dolor quas autem?</p>
                </div>
                <div className="col-span-1 pl-2 text-right">
                    <p>Google Inc</p>
                    <p className="text-xs text-[#808080]">2015 - 2016</p>
                </div>
                <div className="col-span-4 pl-10 ">
                    <p>Business Consultant</p>
                    <p className="text-sm text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illo dolore suscipit veniam atque earum ea minus saepe non. Beatae vitae, similique aut tempora repellendus vel magnam dolor quas autem?</p>
                </div>
            </div>

            <div className="md:grid md:grid-cols-5 mt-10">
                <div className="col-span-1 pl-2 mb-5">
                </div>
                <div className="col-span-4 pl-10 mb-5">
                    <p className="font-bold text-lg  border-b">Work Experience</p>
                </div>
                <div className="col-span-1 pl-2 text-right mb-6">
                    <p>Google Inc</p>
                    <p className="text-xs text-[#808080]">2015 - 2016</p>
                </div>
                <div className="col-span-4 pl-10 mb-6">
                    <p>Business Consultant</p>
                    <p className="text-sm text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illo dolore suscipit veniam atque earum ea minus saepe non. Beatae vitae, similique aut tempora repellendus vel magnam dolor quas autem?</p>
                </div>
                <div className="col-span-1 pl-2 text-right">
                    <p>Google Inc</p>
                    <p className="text-xs text-[#808080]">2015 - 2016</p>
                </div>
                <div className="col-span-4 pl-10 ">
                    <p>Business Consultant</p>
                    <p className="text-sm text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illo dolore suscipit veniam atque earum ea minus saepe non. Beatae vitae, similique aut tempora repellendus vel magnam dolor quas autem?</p>
                </div>
            </div>

            <div className="md:grid md:grid-cols-5 mt-10">
                <div className="col-span-1 pl-2 mb-5">
                </div>
                <div className="col-span-4 pl-10 mb-5">
                    <p className="font-bold text-lg  border-b">Skills</p>
                </div>
                <div className="col-span-1 pl-2 text-right mb-6">

                </div>
                <div className="col-span-4 pl-10 mb-6 text-sm">
                    <div className="flex gap-5 flex-wrap">
                        <div className="w-[30%]">
                            <p>HTML</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                <div className="bg-cyan-400 h-2.5 rounded-full w-[100%]"></div>
                            </div>
                        </div>

                        <div className="w-[30%]">
                            <p>HTML</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                <div className="bg-cyan-400 h-2.5 rounded-full w-[50%]"></div>
                            </div>
                        </div>

                        <div className="w-[30%]">
                            <p>HTML</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                <div className="bg-cyan-400 h-2.5 rounded-full w-[95%]"></div>
                            </div>
                        </div>

                        <div className="w-[30%]">
                            <p>HTML</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                <div className="bg-cyan-400 h-2.5 rounded-full w-[20%]"></div>
                            </div>
                        </div>

                        <div className="w-[30%]">
                            <p>HTML</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                <div className="bg-cyan-400 h-2.5 rounded-full w-[75%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className="md:grid md:grid-cols-5 mt-5">
                <div className="col-span-1 pl-2 mb-5">
                </div>
                <div className="col-span-4 pl-10 mb-5">
                    <p className="font-bold text-lg  border-b">Hobbies</p>
                </div>

                <div className="col-span-1 pl-2 text-right">
                    <p></p>
                    <p className="text-xs text-[#808080]"></p>
                </div>
                <div className="col-span-4 pl-10 mb-6">
                    <div className="md:flex flex-wrap  md:gap-4">
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                    </div>
                </div>
            </div>

            <div className="md:grid md:grid-cols-5 mt-5">
                <div className="col-span-1 pl-2 mb-5">
                </div>
                <div className="col-span-4 pl-10 mb-5">
                    <p className="font-bold text-lg  border-b">Awards</p>
                </div>

                <div className="col-span-1 pl-2 text-right">
                    <p></p>
                    <p className="text-xs text-[#808080]"></p>
                </div>
                <div className="col-span-4 pl-10 mb-6">
                    <div className="md:flex flex-wrap  md:gap-4">
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                        <div><Badge className="p-4 bg-cyan-400 text-black">hOBBY ONE</Badge></div>
                    </div>
                </div>
            </div>




            <div className="md:grid md:grid-cols-5 mt-5">
                <div className="col-span-1 pl-2 mb-5">
                </div>
                <div className="col-span-4 pl-10 mb-5">
                    <p className="font-bold text-lg  border-b">References</p>
                </div>

                <div className="col-span-1 pl-2 text-right">

                </div>
                <div className="col-span-4 pl-10 ">
                    <div className="md:flex md:gap-20">
                        <div className="text-sm text-[#808080]">
                            <p className="font-bold text-cyan-400 text-base">Sam Mucha</p>
                            <p>Zulten-WS</p>
                            <p>CEO</p>
                            <p>sam@mail.com</p>
                            <p>+254 715 100539</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default TemplateFour;