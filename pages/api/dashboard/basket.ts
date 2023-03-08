import type { NextApiRequest, NextApiResponse } from 'next';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../context/Firebase';

type Data = {
  category: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        
    }
  try {
    const docRef = doc(db, 'dashboard', 'category');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as Data;
      res.status(200).json(data);
    }
  } catch (err) {
    console.error(err);
  }
}
