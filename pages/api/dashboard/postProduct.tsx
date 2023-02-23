import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../context/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { Body } from '../../../components/dashboard/types/type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  const sendProductsToFirebase = async (data) => {
    try {
      const productData = await setDoc(doc(db, 'dashboard', 'products'), data, {
        merge: true,
      });
      res.status(200).send(productData);
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' });
    }
  };

  if (
    !body.id &&
    body.namePL &&
    body.nameEN &&
    body.colorPL &&
    body.colorEN &&
    body.pricePL &&
    body.priceEU &&
    body.descriptionPL &&
    body.descriptionEN
  ) {
    const date = Date.now();
    body.id = date;

    const data: Body = {
      [date]: body,
    };
    sendProductsToFirebase(data);
  }
  if (body?.id > 0) {
    const data: Body = {
      [body.id]: body,
    };
    sendProductsToFirebase(data);
  } else res.status(400).json({ data: 'Pola nie uzupełnione' });
}
