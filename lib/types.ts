export type Book = {
  id: string;
  title: string;
  author: string;
  imageLink: string;
  averageRating: number;
  totalRating: number;
  subTitle: string;
  summary?: string;
  audioLink?: string;
  keyIdeas?: number;
  type?: string;
};