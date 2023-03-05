export interface CorrectProductType {
  id: number;
  priceEU: string;
  pricePL: string;
  picture: string;
  category: string;
  colorEN: string;
  colorPL: string;
  descriptionEN: string;
  descriptionPL: string;
  nameEN: string;
  namePL: string;
  sales: number;
}

export interface Body {
  [key: number]: CorrectProductType;
}

export interface Data {
  data?: CorrectProductType;
  message?: string;
}
