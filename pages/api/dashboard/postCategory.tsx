import type { NextApiRequest, NextApiResponse } from 'next';
import type { Data } from './../../../components/dashboard/types/type';
import { db } from '../../../context/Firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  const sendProductsToFirebase = async () => {
    try {
      const categoryData = await updateDoc(doc(db, 'dashboard', 'category'), {
        category: arrayUnion(body),
      });
      res.status(200).send(categoryData);
    } catch (err) {
      res.status(500).send({ message: 'failed to fetch data' });
    }
  };
  if (body) {
    sendProductsToFirebase();
  }
  res.status(400).send({ message: 'failed to fetch data' });
}
