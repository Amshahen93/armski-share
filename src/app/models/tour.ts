export interface Tour {
  name: string;
  image: string;
  description: string;
  overview?: string;
  details?: string;
  short_details?: string [];
  price: string;
  url: string;
  pictures: {
    url: string;
    smallUrl: string;
    alt: string;
  } [];
}
