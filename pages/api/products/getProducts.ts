import type { NextApiRequest, NextApiResponse } from 'next';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../context/Firebase';
import type {
  CorrectProductType,
  Data,
} from './../../../components/dashboard/types/type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CorrectProductType | Data>
) {
  try {
    const docRef = doc(db, 'dashboard', 'products');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      res.status(200).json(Object.values(data));
    } else {
      res.status(400).json({ message: 'Coś poszło nie tak!' });
    }
  } catch (err) {
    console.log(err);
  }
}
