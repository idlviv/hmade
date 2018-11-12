export interface IConfirmPopupData {
  message?: string;
  data?: object;
}

export interface IDesign {
  _id: string;
  structure: string;
  image: string;
}

export interface ITechAsset {
  _id: string;
  image: string;
  description: string;
}

export interface IFeedback {
  message: string;
  contacts: string;
  name: string;
}

export interface IRecommendation {
  _id: string;
  sub: [
    {
      _id: string;
      name: string;
    }
  ];
}

export interface IDesignPopUpData {
  image: string;
  designProducts?: IDesignProducts[];
  title?: string;
  cloudinaryOptions?: string;
  closer?: boolean;
}

export interface IDesignProducts {
  _id: string;
  name: string;
  category_id: string[];
}

export interface IMc {
  _id: string;
  name: string;
  description: string;
  parents: string[];
  display: boolean;
  onMainPage: boolean;
  mainImage: string;
  pics: string[];
  materials?: [
    {
      name: string,
      quantity: number,
      units: string
    }
  ];
  steps: [
    {
      pic: string,
      description: string
    }
  ];
  createdAt?: number;
  updatedAt?: number;
  likes?: number;
  likedBy?: string[];
  dislikes?: number;
  dislikedBy?: string[];
  views?: number;
  comments: IComment[];
}

export interface IComment {
  comment: string;
  commentator: string;
  commentedAt?: number;
  display?: boolean;
}

