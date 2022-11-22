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

const politicaCollectionRef = collection(db, "faq.politica");
class PoliticaServices {
    addPolitica = (newPoli) => {
        return addDoc(politicaCollectionRef, newPoli);
    };

    updatePolitica = (id, updatedPolitica) => {
        const entrDoc = doc(db, "faq.politica", id);
        return updateDoc(entrDoc, updatedPolitica);
    };

    deletePolitica = (id) => {
        const entrDoc = doc(db, "faq.politica", id);
        return deleteDoc(entrDoc);
    };

    getAllPolitica = () => {
        return getDocs(politicaCollectionRef);
    };

    getPolitica = (id) => {
        const entrDoc = doc(db, "faq.politica", id);
        return getDoc(entrDoc);
    };
}

export default new PoliticaServices();