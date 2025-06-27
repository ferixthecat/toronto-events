export interface Event {
  id: number;
  title: string;
  category: string[];
  date: string;
  time: string;
  location: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
  price: string;
  image: string;
  url: string;
  isFree?: boolean;
}

export interface Category {
  id: string;
  label: string;
  color: string;
}
