import { db } from "./_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


async function getItems(userId) {
    const db = getFirestore();
    const items = [];

    const itemsRef = collection(db, "users", userId, "items");

    try {
        const q = query(itemsRef);

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
        return items;
    } catch (error) {
        console.error("Error retrieving items: ", error);
        throw new Error("Error retrieving items");
    }
}

async function addItem(userId, item) {
    const itemsRef = collection(db, "users", userId, "items");

    try {
        const docRef = await addDoc(itemsRef, item);

        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", item);
        throw new Error("Error adding item");
    }

}