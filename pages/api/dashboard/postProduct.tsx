import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../context/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import {
  Body,
  CorrectReferenceType,
} from '../../../components/dashboard/types/type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const date = Date.now();
  const body = req.body;
  body.id = date;
  const correctData: CorrectReferenceType = structuredClone(body);

  const data: Body = {
    [date]: correctData,
  };

  // OPTIONAL LOGGIN VALIDATION

  if (
    body.namePL &&
    body.nameEN &&
    body.colorPL &&
    body.colorEN &&
    body.pricePL &&
    body.priceEU &&
    body.descriptionPL &&
    body.descriptionEN
  ) {
    try {
      const productData = await setDoc(doc(db, 'dashboard', 'products'), data, {
        merge: true,
      });
      res.status(200).send(productData);
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' });
    }
  } else res.status(400).json({ data: 'Pola nie uzupełnione' });
}
