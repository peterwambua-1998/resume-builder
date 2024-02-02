import { useState, useEffect } from "react";
import { Button, Input, Modal, Badge, Accordion } from "react-daisyui";
import { collection, addDoc, query, where, getDoc, getDocs, onSnapshot, Timestamp } from "firebase/firestore"; 
import {  db } from "@/app/firebase/firebase";


const SkillAddEdit = ({user_id}) => {
    const [visibleEdu, setVisibleEdu] = useState(false);
    var [skillName, setSkillName] = useState([]);
    var [skillNameError, setSkillNameError] = useState(null);
    var [skillData, setSkillData] = useState([]);
    
    const toggleVisibleEdu = () => {
        setVisibleEdu(!visibleEdu);
    };

    async function checkSkill(userId) {
        let skillRef =  collection(db, 'skill');
        let q =  query(skillRef, where("user_id", "==", userId));
        onSnapshot(q, (doc) => {
            setSkillData([]);
            doc.forEach((data) => {
                setSkillData((prev) => [...prev, data.data()]);
            })
        })
    }

    async function addSkill() {
        if (skillName == null || !skillName) {
            setSkillNameError('field required');
            return;
        } else {
            setSkillNameError(null);
        }
        

        try {
            let skillRef =  collection(db, 'skill');
            await addDoc(skillRef, {
                name: skillName,
                user_id: user_id,
                created_at: Timestamp.now()
            });
        } catch (error) {
            console.log('system error please try again');
        }
    }

    useEffect(() => {
        checkSkill(user_id);
    }, [])

    return (  
        
        <div className="mb-3">
            <Accordion className="bg-black text-white">
                <Accordion.Title className="text-xl font-medium text-white">
                    Skills
                </Accordion.Title>
                <Accordion.Content>
                        <div className="flex gap-2 mb-2 items-center">
                            {skillData.map((edu, index) => (
                                <div key={index}>
                                    <Badge className="p-4">{edu.name}</Badge>
                                </div>
                            ))}
                        </div>
                        <div className="form-control w-full grow">
                                        <div className="">
                                            <Button onClick={toggleVisibleEdu}>Add</Button>
                                        </div>
                                    </div>
                        
                </Accordion.Content>
            </Accordion>
            {/* <div className="flex justify-center mb-2 text-[5px] md:text-base lg:text-base">
                <ul style={{ listStyleType: 'disc' }} className="text-black pl-10 pr-10 ">
                    {skillData.map((skill, index) => (
                        <li key={index}>{skill.name}</li>
                    ))}
                </ul>
            </div>

            <div className="p-2 mb-2">
                <button onClick={() => toggleVisibleEdu()} className="text-[5px] md:text-base lg:text-base bg-amber-500 pt-2 pb-2 pl-4 pr-4 rounded-full w-full text-black"><FontAwesomeIcon icon={faCirclePlus} /> Add Skill</button>
            </div> */}
            <Modal.Legacy open={visibleEdu} className="bg-white max-w-5xl">
                <form>
                    <Modal.Header className="font-bold text-black">Skill</Modal.Header>
                    <Modal.Body className="p-0">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Add Skill</span>
                            </label>
                            <div className="flex gap-4">
                                <Input className="bg-white w-full text-black" placeholder="Ex: Databases" onChange={(e) => setSkillName(e.target.value)} />
                                <div className="text-red-600 text-sm">{skillNameError}</div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Actions>
                        <Button type="button" onClick={toggleVisibleEdu} >Close</Button>
                        <Button type="button" className="bg-[#F59E0B] text-white border-none" onClick={() => {addSkill()}}>Save</Button>
                    </Modal.Actions>
                </form>
            </Modal.Legacy>
        </div>
    );
}
 
export default SkillAddEdit;