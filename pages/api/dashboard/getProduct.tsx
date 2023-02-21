import type { NextApiRequest, NextApiResponse } from 'next';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../context/Firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const docRef = doc(db, 'dashboard', 'products');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json(docSnap.data());
    } else {
      res.status(400).json({ namePL: 'Coś poszło nie tak!' });
    }
  } catch (err) {
    console.log(err);
  }
}
