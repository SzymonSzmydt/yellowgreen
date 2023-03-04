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
    body.id === 0 &&
    body.namePL &&
    body.nameEN &&
    body.category &&
    body.colorPL &&
    body.colorEN &&
    body.pricePL &&
    body.priceEU &&
    body.descriptionPL &&
    body.descriptionEN
  ) {
    body.id = Date.now();
    const data: Body = {
      [body.id]: body,
    };
    res.status(201).json({ id: body.id });
    return sendProductsToFirebase(data);
  }
  if (body.id > 0) {
    const data: Body = {
      [body.id]: body,
    };
    return sendProductsToFirebase(data);
  } else res.status(400).json({ message: 'Pola nie uzupełnione' });
}
