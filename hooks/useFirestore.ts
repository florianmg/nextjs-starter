import { firestore } from '../lib/firebase';
import { doc, collection, setDoc, addDoc, CollectionReference } from 'firebase/firestore';

const useFirestore = () => {

    const createDigitalBookCollection = async (uid: string) => {
        return await addDoc(collection(firestore, "digitalBooks"), {uid: uid});
    }

    const createUserCollection = async (uid: string) => {
        const newUserRef = doc(firestore, 'users', uid);
        return await setDoc(newUserRef, { premium: false }, { merge: true });
    }

    return {
        createDigitalBookCollection,
        createUserCollection
    }
}

export default useFirestore;