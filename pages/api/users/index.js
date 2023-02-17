import { db } from "../../../data/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data.email);
    try {
      const q = query(
        collection(db, "users"),
        where("email", "==", data.email)
      );
      if ((await getDocs(q)).size > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }
      const docRef = await addDoc(collection(db, "users"), {
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
      const querySnapshot = await getDocs(collection(db, "users"));
      let users = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        users.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(users);
    } catch (e) {
      res.status(400).end();
    }
  }
}
