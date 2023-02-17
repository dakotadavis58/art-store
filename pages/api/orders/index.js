import { db } from "../../../data/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      console.log(data);
      const docRef = await addDoc(collection(db, "orders"), {
        ...data,
        created: new Date().toISOString(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    res.status(200).json({ message: "success" });
  } else if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      let orders = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        orders.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(orders);
    } catch (e) {
      res.status(400).end();
    }
  }
}
