import { IAuthor } from './Author';
import { ICategory } from './Category';
import { IFeaturedImage } from './FeaturedImage';

export interface IPost {
  author: IAuthor;
  categories: ICategory[];
  content: string;
  databaseId: number;
  date: string;
  excerpt: string;
  featuredImage?: IFeaturedImage;
  id: string;
  isSticky: boolean;
  modified: string;
  slug: string;
  title: string;
}
