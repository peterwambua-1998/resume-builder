import { useState, useEffect } from "react";
import { Button, Input, Modal, Badge, Accordion } from "react-daisyui";
import { collection, addDoc, query, where, getDoc, getDocs, onSnapshot, Timestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";


const SkillAddEdit = ({ user_id }) => {
    const [visibleEdu, setVisibleEdu] = useState(false);
    var [visibleEdit, setVisibleEdit] = useState(false);

    var [skillName, setSkillName] = useState([]);
    var [skillNameError, setSkillNameError] = useState(null);
    var [skillData, setSkillData] = useState([]);

    var [selectedRecord, setSelectedRecord] = useState(null);


    const toggleVisibleEdu = () => {
        setVisibleEdu(!visibleEdu);
    };

    const toggleVisibleEdit = (record) => {
        setVisibleEdit(!visibleEdit);
        if (record) {
            addRespRecords(record);
            setSelectedRecord(record);
        } else {
            setSelectedRecord(null);
        }
    };

    function addRespRecords(data) {
        if (data) {
            setSkillName(data.name);
        }
    }

    async function saveEditDetails(recordId) {
        if (skillName == null || !skillName) {
            setSkillNameError('field required');
            return;
        } else {
            setSkillNameError(null);
        }

        try {
            let data = {
                name: skillName,
                user_id: user_id,
                created_at: Timestamp.now()
            }

            await updateDoc(doc(db, "skill", recordId), data);
        } catch (error) {
            console.log(error);
            console.log('system error please try again');
        }
    }

    async function checkSkill(userId) {
        let skillRef = collection(db, 'skill');
        let q = query(skillRef, where("user_id", "==", userId));
        onSnapshot(q, (doc) => {
            setSkillData([]);
            doc.forEach((data) => {
                let docId = data.id;
                const documentData = data.data();
                const newData = { ...documentData, id: docId };
                setSkillData((prev) => [...prev, newData]);
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
            let skillRef = collection(db, 'skill');
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
                                <Badge className="p-4">{edu.name} <Button onClick={() => toggleVisibleEdit(edu)} className="rouned-full"><FontAwesomeIcon icon={faPencilAlt} /></Button></Badge>
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

            {
                selectedRecord ?
                    <Modal.Legacy open={visibleEdit} className="bg-white max-w-5xl">
                        <form>
                            <Modal.Header className="font-bold text-black">Skill</Modal.Header>
                            <Modal.Body className="p-0">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-black">Edit Skill</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <Input defaultValue={selectedRecord.name ? selectedRecord.name : ''} className="bg-white w-full text-black" placeholder="Ex: Databases" onChange={(e) => setSkillName(e.target.value)} />
                                        <div className="text-red-600 text-sm">{skillNameError}</div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Actions>
                                <Button type="button" onClick={() => toggleVisibleEdit(null)} >Close</Button>
                                <Button type="button" className="bg-[#F59E0B] text-white border-none" onClick={() => saveEditDetails(selectedRecord.id)}>Save</Button>
                            </Modal.Actions>
                        </form>
                    </Modal.Legacy>
                    : <div></div>
            }
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
                        <Button type="button" className="bg-[#F59E0B] text-white border-none" onClick={() => { addSkill() }}>Save</Button>
                    </Modal.Actions>
                </form>
            </Modal.Legacy>
        </div>
    );
}

export default SkillAddEdit;