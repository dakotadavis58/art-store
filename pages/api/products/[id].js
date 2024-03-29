import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../../data/firebase";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(req.query);
  const docRef = doc(db, "products", id);
  try {
    if (req.method === "PUT") {
      await db
        .collection("products")
        .doc(id)
        .update({
          ...req.body,
          updated: new Date().toISOString(),
        });
    } else if (req.method === "GET") {
      const doc = await getDoc(docRef);
      if (!doc.exists()) {
        res.status(404).end();
      } else {
        console.log(doc);
        res.status(200).json(doc.data());
      }
    } else if (req.method === "DELETE") {
      await db.collection("products").doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
