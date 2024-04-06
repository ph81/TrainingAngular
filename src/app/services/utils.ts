export type Movie = {
  id: number;
  title: string;
  year: string;
  rated: string;
  released:string;
  runtime: string;
  genre:string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  showings: string[];
 };

 export interface Item  {
  id?: number;
  title?: string;
  screeningTime?: string;
  ticketType?: string;
  quantity?: number;
  ticketPrice?: number;
  foodPrice?: number;
  type?: string;
  price?: number;
 }

 export type Food =  {
  id: number;
  image: string;
  title: string;
  isBucket?: boolean;
  foodType?: string;
  price?: number;
  quantity: number;
 }
