export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  aboud: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[];
  photo: string[];
}
