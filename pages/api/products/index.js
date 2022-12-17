import { db } from "../../../data/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    res.status(200).json({ message: "success" });
  } else if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      let products = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        products.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(products);
    } catch (e) {
      res.status(400).end();
    }
  }
}
