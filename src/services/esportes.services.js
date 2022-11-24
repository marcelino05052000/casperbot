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

const esportesCollectionRef = collection(db, "faq.esportes");
class EsportesServices {
    addEsportes = (newEspo) => {
        return addDoc(esportesCollectionRef, newEspo);
    };

    updateEsportes = (id, updatedEsportes) => {
        const entrDoc = doc(db, "faq.esportes", id);
        return updateDoc(entrDoc, updatedEsportes);
    };

    deleteEsportes = (id) => {
        const entrDoc = doc(db, "faq.esportes", id);
        return deleteDoc(entrDoc);
    };

    getAllEsportes = () => {
        return getDocs(esportesCollectionRef);
    };

    getEsportes = (id) => {
        const entrDoc = doc(db, "faq.esportes", id);
        return getDoc(entrDoc);
    };
}

export default new EsportesServices();