export interface IProduct {
  _id: string;
  name: string;
  description: string;
  parents: string[];
  display: boolean;
  onMainPage: boolean;
  mainImage?: string;
  menuImage: string;
  assets?: string[];
  price?: number;
  discount?: number;
  dimensions?: {
    width: number,
    height: number
  };
  createdAt?: number;
  updatedAt?: number;
  likes?: number;
  likedBy?: string;
  dislikes?: number;
  dislikedBy?: string;
  views?: number;
  comments?: [{
    comment: string,
    commentator: string,
    commentedAt: number
  }];
}
