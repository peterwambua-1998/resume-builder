import Image from "next/image";
import ProfilePhoto from "./template-one-components/profilePhoto";
import profImage from '@/app/images/profile.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

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
                        <p className="text-lg font-bold">Peter Wambua Mutuku</p>
                        <p className="font-semibold text-[#808080]">business consultant</p>
                    </div>
                    <div className="pt-5 grid grid-cols-2 text-sm">
                        <p><span><FontAwesomeIcon icon={faPhone} /> 0789 100 789</span></p>
                        <p><span><FontAwesomeIcon icon={faEnvelope} /> 0789 100 789</span></p>
                        <p className="mt-4"><span><FontAwesomeIcon icon={faLocation} /> 0789 100 789</span></p>
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
        </div>
    );
}

export default TemplateFour;