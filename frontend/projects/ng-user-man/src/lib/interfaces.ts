export interface IUser {
  _id?: string;
  provider?: string;
  login: string;
  email?: string;
  avatar?: string;
  name?: string;
  surname?: string;
  role?: string;
  ban?: string;
  createdAt?: number;
  password?: string;
  commentsReadedTill?: number;
}

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
  seoTitle?: string;
  seoMeta?: string;
}

// catalog
export interface ITopMenu {
  common: ICatalog[];
  system: ICatalog[];
}

export interface ICatalog {
  _id: string;
  name: string;
  ancestors: string[];
  parent: string;
  description: string;
  assets: string[];
  order: number;
  prefix: string;
  seoMeta?: string;
  seoTitle?: string;
  sizeOfAncestors?: number;
}

// deprecated
export interface IResponse {
  success?: boolean;
  message?: string;
  data?: any;
}
