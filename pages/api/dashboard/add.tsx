import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../context/Firebase';
import { setDoc, doc } from 'firebase/firestore';

type Body = {
  [key: number]: {
    id: string;
    priceEN: number;
    pricePL: number;
    colorEN: string;
    colorPL: string;
    descriptionEN: string;
    descriptionPL: string;
    nameEN: string;
    namePL: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const date = Date.now();
  const body = req.body;
  body.id = date;

  const data: Body = {
    [date]: body,
  };

  // OPTIONAL LOGGIN VALIDATION

  if (
    body.namePL &&
    body.nameEN &&
    body.colorPL &&
    body.colorEN &&
    body.pricePL &&
    body.priceEN &&
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
