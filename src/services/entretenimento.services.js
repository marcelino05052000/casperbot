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

const entretenimentoCollectionRef = collection(db, "faq.entretenimento");
class EntretenimentoServices {
    addEntretenimento = (newEntr) => {
        return addDoc(entretenimentoCollectionRef, newEntr);
    };

    updateEntretenimento = (id, updatedEntretenimento) => {
        const entrDoc = doc(db, "faq.entretenimento", id);
        return updateDoc(entrDoc, updatedEntretenimento);
    };

    deleteEntretenimento = (id) => {
        const entrDoc = doc(db, "faq.entretenimento", id);
        return deleteDoc(entrDoc);
    };

    getAllEntretenimento = () => {
        return getDocs(entretenimentoCollectionRef);
    };

    getEntretenimento = (id) => {
        const entrDoc = doc(db, "faq.entretenimento", id);
        return getDoc(entrDoc);
    };
}

export default new EntretenimentoServices();