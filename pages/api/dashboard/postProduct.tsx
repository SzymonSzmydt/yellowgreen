import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../context/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import type { Body } from '../../../context/types/type';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  const sendProductsToFirebase = async (product: Body) => {
    try {
      await setDoc(doc(db, 'dashboard', 'products'), product, {
        merge: true,
      });
    } catch (err) {
      console.error(err);
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
    res.status(201).send({ message: 'Seccess' });
    return sendProductsToFirebase(data);
  }
  if (body.id > 0) {
    const data: Body = {
      [body.id]: body,
    };
    return sendProductsToFirebase(data);
  } else res.status(400).json({ message: 'Pola nie uzupełnione' });
}
