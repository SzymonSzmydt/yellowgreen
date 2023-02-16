import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  // OPTIONAL LOGGIN VALIDATION

  console.log(body);

  if (!body.namePL || !body.nameEN) {
    return res.status(400).json({ data: 'Nie wpisano Nazwy PL lub Nazwy EN' });
  }
  if (!body.colorPL || !body.colorEN) {
    return res
      .status(400)
      .json({ data: 'Nie wpisano Koloru PL lub Koloru EN' });
  }
  if (!body.cenaPL || !body.cenaEN) {
    return res
      .status(400)
      .json({ data: 'Nie wpisano poprawnie Ceny PL lub Ceny EN' });
  }
  if (!body.descriptionPL || !body.descriptionEN) {
    return res.status(400).json({ data: 'Nie wpisano Opisu PL lub Opisu EN' });
  }

  res.status(200).json({ data: 'SUCCESS' });
}
