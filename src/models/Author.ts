import { IAvatar } from './Avatar';

export interface IAuthor {
  id: string;
  name: string;
  slug: string;
  avatar: IAvatar;
}
