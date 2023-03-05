import type { NextApiRequest, NextApiResponse } from 'next';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../context/Firebase';
import { Data } from './../../../context/types/type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const docRef = doc(db, 'dashboard', 'category');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as Data;
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: 'Coś poszło nie tak!' });
    }
  } catch (err) {
    console.log(err);
  }
}
