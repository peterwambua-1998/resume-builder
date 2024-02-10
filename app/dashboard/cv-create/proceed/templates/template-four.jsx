import Image from "next/image";
import ProfilePhoto from "./template-one-components/profilePhoto";
import profImage from '@/app/images/profile.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Badge, Progress } from "react-daisyui";

const TemplateFour = ({ userId }) => {
    return (
        <div className=" m-bg p-6">
            {/* top area */}
            <div className="md:grid md:grid-cols-5">
                <div className="col-span-1 pl-2 ">
                    <ProfilePhoto userId={userId} />
                </div>
                <div className="col-span-4 pl-10">
                    <div className="border-b  pb-5">
                        <p className="text-lg font-bold text-cyan-400">Peter Wambua Mutuku</p>
                        <p className="font-semibold text-[#808080]">business consultant</p>
                    </div>
                    <div className="pt-5 grid grid-cols-2 text-sm">
                        <p><span><FontAwesomeIcon icon={faPhone} className="text-cyan-400" /> 0789 100 789</span></p>
                        <p><span><FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" /> 0789 100 789</span></p>
                        <p className="mt-4"><span><FontAwesomeIcon icon={faLocation} className="text-cyan-400" /> 0789 100 789</span></p>
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