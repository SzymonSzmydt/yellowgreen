import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../context/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import type { Body, Data } from '../../../components/dashboard/types/type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  const sendProductsToFirebase = async (data: Body) => {
    try {
      const productData = await setDoc(doc(db, 'dashboard', 'products'), data, {
        merge: true,
      });
      res.status(200).send(productData);
    } catch (err) {
      res.status(500).send({ message: 'failed to fetch data' });
    }
  };

  if (
    body.namePL &&
    body.nameEN &&
    body.category &&
    body.colorPL &&
    body.colorEN &&
    body.pricePL &&
    body.priceEU &&
    body.picture &&
    body.descriptionPL &&
    body.descriptionEN
  ) {
    if (body.id === 0) {
      body.id = Date.now();
      const data: Body = {
        [body.id]: body,
      };
      return sendProductsToFirebase(data);
    }
    const data: Body = {
      [body.id]: body,
    };
    sendProductsToFirebase(data);
  } else res.status(400).json({ data: 'Pola nie uzupełnione' });
}
