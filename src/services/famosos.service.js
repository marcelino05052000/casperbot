import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const famososCollectionRef = collection(db, "faq.famosos");
class FamososServices {
    addFamosos = (newFamo) => {
        return addDoc(famososCollectionRef, newFamo);
    };

    updateFamosos = (id, updatedFamosos) => {
        const entrDoc = doc(db, "faq.famosos", id);
        return updateDoc(entrDoc, updatedFamosos);
    };

    deleteFamosos = (id) => {
        const entrDoc = doc(db, "faq.famosos", id);
        return deleteDoc(entrDoc);
    };

    getAllFamosos = () => {
        return getDocs(famososCollectionRef);
    };

    getFamosos = (id) => {
        const entrDoc = doc(db, "faq.famosos", id);
        return getDoc(entrDoc);
    };
}

export default new FamososServices();