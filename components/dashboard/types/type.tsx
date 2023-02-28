export interface CorrectProductType {
  id: number;
  priceEU: number;
  pricePL: number;
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
