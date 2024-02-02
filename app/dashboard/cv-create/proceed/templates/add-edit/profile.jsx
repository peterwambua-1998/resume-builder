'use client'
import { db } from "@/app/firebase/firebase";
import { Timestamp, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Skeleton, Button, Modal, Accordion, Input, Select } from "react-daisyui";

const ProfileDetails = ({userId}) => {
    const [profile, setProfile] = useState(null);
    let loading = true;
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    //profile info
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [dob, setDob] = useState(null);
    const [location, setLocation] = useState(null);
    const [martialStatus, setMartialStatus] = useState(null);

    // profile errors
    const [fullNameError, setFullNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [dobError, setDobError] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [martialStatusError, setMartialStatusError] = useState(null);


    async function getProfile() {
        console.log(userId);

        try {
            const usb = onSnapshot(doc(db, 'profile', userId), doc => {
                if (doc.data()) {
                    setProfile(doc.data());
                } else {
                    setProfile(null);
                }
            });
            loading = false;
        } catch (error) {
            console.log(error);
        }
    }

    async function addProfile() {
        if (fullName == null || !fullName) {
            setFullNameError('field required');
            return;
        } else {
            setFullNameError(null);
        }

        if (email == null || !email) {
            setEmailError('field required');
            return;
        } else {
            setEmailError(null);
        }

        if (dob == null || !dob) {
            setDobError('field required');
            return;
        } else {
            setDobError(null);
        }

        if (location == null || !location) {
            setLocationError('field required');
            return;
        } else {
            setLocationError(null);
        }
        

        try {
            const data = {
                full_name: fullName,
                email: email,
                location: location,
                DOB: dob,
                martial_status: martialStatus,
                created_at: Timestamp.now()
            }
            await setDoc(doc(db, "profile", user.uid), data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getProfile();
    }, [])

    if (profile == true) {
        return (
            <div>
                {console.log(profile)}
                <Skeleton className="h-4 w-full bg-blue-800"></Skeleton>
            </div>
        )
    } else {
        return (  
            <div>
               {console.log(profile)}
    
                    {
                        (loading == true && profile == null)  ? 
                        (
                        <div>
                            <Skeleton className="h-4 w-full bg-blue-800"></Skeleton>
                        </div>) :
                            
                        (
                            <Accordion className="bg-black text-white">
                                <Accordion.Title className="text-xl font-medium text-white">
                                    Profile
                                </Accordion.Title>
                                <Accordion.Content>
                                        <div className="form-control w-full grow">
                                            <div className="">
                                            {console.log(profile)}
                                               
                                                <Button onClick={toggleVisible}>Add</Button>
                                            </div>
                                        </div>
                                </Accordion.Content>
                            </Accordion>
                        )
                    }
                    <Modal.Legacy open={visible} className="bg-white max-w-5xl">
                    <form>
                        <Modal.Header className="font-bold">About me</Modal.Header>
                        <Modal.Body className="p-0">
                        <div className="md:grid md:grid-cols-2">
                                <div>
                                    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                                        <div className="form-control w-full ">
                                            <label className="label">
                                                <span className="label-text text-black">Full name</span>
                                            </label>
                                            <Input className="bg-white" placeholder="Ex: John Doe" onChange={(e) => setFullName(e.target.value)} />
                                            <div className="text-red-600 text-sm">{fullNameError}</div>
                                        </div>
                                    </div>
                                </div>
    
                                <div>
                                    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                                        <div className="form-control w-full ">
                                            <label className="label">
                                                <span className="label-text text-black">Email</span>
                                            </label>
                                            <Input className="bg-white" placeholder="Ex: someone@mail.com" onChange={(e) => setEmail(e.target.value)} />
                                            <div className="text-red-600 text-sm">{emailError}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-3 mb-2">
                                <div>
                                    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-black">DOB</span>
                                            </label>
                                            <Input type="date" className="bg-white" onChange={(e) => setDob(e.target.value)} />
                                            <div className="text-red-600 text-sm">{dobError}</div>
                                        </div>
                                    </div>
                                </div>
    
                                <div>
                                    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-black">Location</span>
                                            </label>
                                            <Input className="bg-white" placeholder="Ex: Nairobi, Kenya" onChange={(e) => setLocation(e.target.value)} />
                                            <div className="text-red-600 text-sm">{locationError}</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-black">Martial status (Optional)</span>
                                            </label>
                                            <Select className="bg-white" onChange={(e) => setMartialStatus(e.target.value)}>
                                                <option value={'Pick one'}>
                                                    Pick one
                                                </option>
                                                <option value={'n/a'}>n/a</option>
                                                <option value={'Single'}>Single</option>
                                                <option value={'Married'}>Married</option>
                                                <option value={'Divorced'}>Divorced</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Actions>
                            <Button type="button" onClick={toggleVisible} >Close</Button>
                            <Button type="button" className="bg-[#F59E0B] text-white border-none" onClick={addProfile}>Save</Button>
                        </Modal.Actions>
                    </form>
                </Modal.Legacy>
            </div>
        );
    }

    
}
 
export default ProfileDetails;