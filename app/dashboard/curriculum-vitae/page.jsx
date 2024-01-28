'use client';
import { app, db, auth } from "@/app/firebase/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Card, Button, Loading } from "react-daisyui";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { collection, query, where, getDoc, getDocs, onSnapshot, Timestamp,doc } from "firebase/firestore"; 
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

const CurriculumVitae = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [firebase_user, loading, error] = useAuthState(auth);
    const [user, setUser] = useState();
    var [useCVS, setUserCvs] =  useState([]);
    const [err, setErr] =  useState(null);
    let [abcd, setAbcd] = useState([]);
    const storage = getStorage();
    const [isLoading, setIsLoading] = useState(true);

    async function getCv() {
       try {
            let cvRef =  collection(db, 'cv');
            let q =  query(cvRef, where("user_id", "==", firebase_user.uid));
            onSnapshot(q, (docss) => {
                setAbcd([]);
                docss.forEach(async (data) => {
                    let md = data.data();
                    let docRef = doc(db, 'cv-types', md['cv_type']);
                    const docSnap = await getDoc(docRef);
                    let d = docSnap.data();
                    const gsReference = await getDownloadURL(ref(storage, d['photo_url']));
                    md.cv_image = gsReference;
                    setAbcd((prev) => [...prev, md]);
                })
            });
       } catch (error) {
            console.log(error);
            setErr('system error please try again');
       } 
    }

    // for listening on user state
    // useEffect(() => {
    //     setUser(firebase_user.uid);
    // },[firebase_user]);

    useEffect(() => {
        if (!loading) {
            if (firebase_user) {
                setUser(firebase_user.uid);
                getCv();
            } else {
                router.push('/');
            }
        }
    },[]);
   
    return (  
        <main className="g-image">
        <div >
            <div className="p-8 h-[40vh] my-bg-blur">
                <h1 className="text-2xl font-bold">Curriculum Vitae</h1>
            </div>
            <div className="p-8 absolute top-[30%] w-full">
                <div className="md:border md:border-slate-200 p-5 md:rounded bg-white">
                    <div className="md:grid md:grid-cols-4">
                        <div className="p-2" >
                            <Menu>
                                <Menu.Item>
                                    <a className="active">My Curriculam Vitae</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link href='/dashboard/cv-create/proceed'>Create Cv</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className="md:col-span-3">
                            {loading ? <div className="text-center"><Loading /></div>  : 
                                abcd.length > 0 ? (
                                    abcd.map((val, index) =>
                                        (
                                            <div className="md:grid md:grid-cols-3 gap-4" key={index}>
                                            <Card>
                                                <Card.Image src={val['cv_image']} alt="Shoes" loading="eager" />
                                                <Card.Body>
                                                    <Card.Title tag="h2">{val['title']}</Card.Title>
                                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                                    <Card.Actions className="justify-end">
                                                    <Button color="primary">View</Button>
                                                    </Card.Actions>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        )
                                    )

                                ) : (<div className="text-center">no data available</div>)
                            }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    );

}
 
export default CurriculumVitae;