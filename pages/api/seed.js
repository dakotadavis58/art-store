import { db } from "../../data/firebase";
import data from "../../data/data";
import { addDoc, collection } from "firebase/firestore";

export default async function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
  console.log(data.products);
  try {
    data.products.forEach(async (product) => {
      const docRef = await addDoc(collection(db, "products"), {
        ...product,
      });
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
