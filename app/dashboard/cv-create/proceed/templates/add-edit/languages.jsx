import { db } from "@/app/firebase/firebase";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Timestamp, addDoc, collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Modal, Input, Select } from "react-daisyui";

const Languages = ({userId}) => {
    const [languages, setLanguages] = useState([]);

    const [nameValue, setNameValue] = useState(null);
    const [descriptionValue, setDescriptionValue] = useState(null);

    const [titleValueError, setTitleValueError] = useState(null);
    const [descriptionValueError, setDescriptionValueError] = useState(null);

    const [visible, setVisible] = useState(false);
    var [visibleEdit, setVisibleEdit] = useState(false);

    var [selectedRecord, setSelectedRecord] = useState(null);

    const toggleVisible = () => {
        setVisible(!visible);
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
            setNameValue(data.name);
            setDescriptionValue(data.description);
        }
    }


    function getLanguages() {
        try {
            let langsRef = collection(db, 'languages');
            let q = query(langsRef, where('user_id', '==', userId));
            onSnapshot(q, (docs) => {
                setLanguages([]);
                docs.forEach(doc => {
                    let docId = doc.id;
                    const documentData = doc.data();
                    const newData = { ...documentData, id: docId };
                    setLanguages(prev => [...prev, newData]);
                });
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function addLanguage() {
        if (!nameValue || nameValue == null) {
            setTitleValueError('field required');
            return;
        } else {
            setTitleValueError('field required');
        }

        if (descriptionValue == "Pick one" || descriptionValue == null) {
            setDescriptionValueError('field required');
            return;
        } else {
            setDescriptionValueError('field required');
        }

        try {
            const data = {
                user_id: userId,
                name: nameValue,
                description: descriptionValue,
                created_at: Timestamp.now()
            }
            const collectionRef = collection(db, 'languages');
            const res = await addDoc(collectionRef, data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLanguages();
    }, []);



    async function saveEditDetails(recordId) {
        if (!nameValue || nameValue == null) {
            setTitleValueError('field required');
            return;
        } else {
            setTitleValueError('field required');
        }

        if (descriptionValue == "Pick one" || descriptionValue == null) {
            setDescriptionValueError('field required');
            return;
        } else {
            setDescriptionValueError('field required');
        }

        try {
            let data = {
                user_id: userId,
                name: nameValue,
                description: descriptionValue,
                created_at: Timestamp.now()
            }
            await updateDoc(doc(db, "project", recordId), data);
        } catch (error) {
            console.log(error);
        }
    }


    return (  
        <div className="mb-3">
            <Accordion className="bg-black text-white">
                <Accordion.Title className="text-xl font-medium text-white">
                    Languages
                </Accordion.Title>
                <Accordion.Content>
                    <div className="flex gap-2 mb-2 items-center">
                        {languages.map((lang, index) => (
                            <div key={index}>
                                <Badge className="p-4">{lang.name} <Button onClick={() => toggleVisibleEdit(lang)} className="rouned-full"><FontAwesomeIcon icon={faPencilAlt} /></Button></Badge>
                            </div>
                        ))}
                    </div>
                    <div className="form-control w-full grow">
                        <div className="flex gap-4">
                            <Button onClick={() => { toggleVisible() }}>Add</Button>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion>

            <Modal.Legacy open={visible} className="bg-white max-w-5xl">
                <form>
                    <Modal.Header className="font-bold text-black">Language</Modal.Header>
                    <Modal.Body className="p-0">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Language</span>
                            </label>
                            <div className="flex gap-4">
                                <Input className="bg-white text-black grow" placeholder="Title" onChange={(e) => setNameValue(e.target.value)} />
                                <div className="text-red-600 text-sm">{titleValueError}</div>
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Description</span>
                            </label>
                            <div className="flex gap-4">
                                <Select className="bg-white text-black" onChange={(e) => setDescriptionValue(e.target.value)} >
                                    <option>
                                        Pick one
                                    </option>
                                    <option  value="Native">Native</option>
                                    <option value="Professional">Professional</option>
                                </Select>
                                <div className="text-red-600 text-sm">{descriptionValueError}</div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Actions>
                        <Button type="button" onClick={toggleVisible} >Close</Button>
                        <Button type="button" className="bg-[#F59E0B] text-white border-none" onClick={() => addLanguage()}>Save</Button>
                    </Modal.Actions>
                </form>
            </Modal.Legacy>

            {
                selectedRecord ? 
                    <Modal.Legacy open={visibleEdit} className="bg-white max-w-5xl">
                        <form>
                            <Modal.Header className="font-bold text-black">Language</Modal.Header>
                            <Modal.Body className="p-0">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-black">Language</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <Input defaultValue={selectedRecord.name ? selectedRecord.name : ''} className="bg-white text-black grow" placeholder="Title" onChange={(e) => setNameValue(e.target.value)} />
                                        <div className="text-red-600 text-sm">{titleValueError}</div>
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-black">Description</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <Select className="bg-white text-black" onChange={(e) => setDescriptionValue(e.target.value)} >
                                            <option>
                                                Pick one
                                            </option>
                                            <option selected={selectedRecord.description == 'Native' ? 'selected' : null} value="Native">Native</option>
                                            <option selected={selectedRecord.description == 'Professional' ? 'selected' : null} value="Professional">Professional</option>
                                        </Select>
                                        
                                        <div className="text-red-600 text-sm">{descriptionValueError}</div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Actions>
                                <Button type="button" onClick={() => toggleVisibleEdit(null)} >Close</Button>
                                <Button type="button" className="bg-[#F59E0B] text-white border-none" onClick={() => saveEditDetails(selectedRecord.id)}>Save</Button>
                            </Modal.Actions>
                        </form>
                    </Modal.Legacy>
                :
                <div></div>
            }
        </div>
    );
}
 
export default Languages;