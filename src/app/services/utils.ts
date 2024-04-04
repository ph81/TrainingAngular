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
  title?: string;
  screeningTime?: string;
  ticketType?: string;
  quantity?: number;
  ticketPrice?: number;
  snackPrice?: number;
 }