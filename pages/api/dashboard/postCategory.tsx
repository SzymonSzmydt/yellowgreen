import type { NextApiRequest } from 'next';
import { db } from '../../../context/Firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export default async function handler(req: NextApiRequest) {
  const body = req.body;

  const sendProductsToFirebase = async () => {
    try {
      await updateDoc(doc(db, 'dashboard', 'category'), {
        category: arrayUnion(body),
      });
    } catch (err) {
      console.error(err);
    }
  };
  if (body) {
    sendProductsToFirebase();
  }
}
