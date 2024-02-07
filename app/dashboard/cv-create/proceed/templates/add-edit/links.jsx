import { db } from "@/app/firebase/firebase";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Timestamp, addDoc, collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Modal, Input, Select } from "react-daisyui";


const LinksUser = ({ userId }) => {
    const [links, setLinks] = useState([]);

    const [nameValue, setNameValue] = useState(null);
    const [linkValue, setLinkValue] = useState(null);

    const [titleValueError, setTitleValueError] = useState(null);
    const [linkValueError, setLinkValueError] = useState(null);

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
            setLinkValue(data.link);
        }
    }


    function getLinks() {
        try {
            let linksRef = collection(db, 'links');
            let q = query(linksRef, where('user_id', '==', userId));
            onSnapshot(q, (docs) => {
                setLinks([]);
                docs.forEach(doc => {
                    let docId = doc.id;
                    const documentData = doc.data();
                    const newData = { ...documentData, id: docId };
                    setLinks(prev => [...prev, newData]);
                });
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function addLink() {
        if (!nameValue || nameValue == null) {
            setTitleValueError('field required');
            return;
        } else {
            setTitleValueError('field required');
        }

        if (linkValue == "Pick one" || linkValue == null) {
            setLinkValueError('field required');
            return;
        } else {
            setLinkValueError('field required');
        }

        try {
            const data = {
                user_id: userId,
                name: nameValue,
                link: linkValue,
                created_at: Timestamp.now()
            }
            const collectionRef = collection(db, 'links');
            const res = await addDoc(collectionRef, data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLinks();
    }, []);

    async function saveEditDetails(recordId) {
        if (!nameValue || nameValue == null) {
            setTitleValueError('field required');
            return;
        } else {
            setTitleValueError('field required');
        }

        if (linkValue == "Pick one" || linkValue == null) {
            setLinkValueError('field required');
            return;
        } else {
            setLinkValueError('field required');
        }

        try {
            let data = {
                user_id: userId,
                name: nameValue,
                link: linkValue,
                created_at: Timestamp.now()
            }
            await updateDoc(doc(db, "links", recordId), data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="mb-3">
            <Accordion className="bg-amber-400 text-black">
                <Accordion.Title>
                    <p className="text-base font-semibold">Links</p>
                </Accordion.Title>
                <Accordion.Content>
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                        {links.map((link, index) => (
                            <div key={index}>
                                <Badge className="p-4">{link.name} <FontAwesomeIcon icon={faPencilAlt} onClick={() => toggleVisibleEdit(link)} className="pl-3 hover:cursor-pointer" /></Badge>
                            </div>
                        ))}
                    </div>
                    <div className="form-control w-full grow">
                        <div className="flex gap-4">
                            <Button className="bg-amber-200 border-amber-500 text-black" onClick={() => { toggleVisible() }}>Add</Button>
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
                                <span className="label-text text-black">Link title</span>
                            </label>
                            <div className="flex gap-4">
                                <Input className="bg-white text-black grow" placeholder="EX: website" onChange={(e) => setNameValue(e.target.value)} />
                                <div className="text-red-600 text-sm">{titleValueError}</div>
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Link</span>
                            </label>
                            <div className="flex gap-4">
                                <Input className="bg-white text-black grow" placeholder="EX: www.website.com" onChange={(e) => setLinkValue(e.target.value)} />
                                <div className="text-red-600 text-sm">{linkValueError}</div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Actions>
                        <Button type="button" onClick={toggleVisible} >Close</Button>
                        <Button type="button" className="bg-[#F59E0B] text-white border-none" onClick={() => addLink()}>Save</Button>
                    </Modal.Actions>
                </form>
            </Modal.Legacy>

            {
                selectedRecord ?
                    <Modal.Legacy open={visibleEdit} className="bg-white max-w-5xl">
                        <form>
                            <Modal.Header className="font-bold text-black">Link</Modal.Header>
                            <Modal.Body className="p-0">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-black">Link title</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <Input defaultValue={selectedRecord.name ? selectedRecord.name : ''} className="bg-white text-black grow" placeholder="EX: website" onChange={(e) => setNameValue(e.target.value)} />
                                        <div className="text-red-600 text-sm">{titleValueError}</div>
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-black">Link</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <Input defaultValue={selectedRecord.link ? selectedRecord.link : ''} className="bg-white text-black grow" placeholder="EX: www.website.com" onChange={(e) => setLinkValue(e.target.value)} />
                                        <div className="text-red-600 text-sm">{linkValueError}</div>
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

export default LinksUser;