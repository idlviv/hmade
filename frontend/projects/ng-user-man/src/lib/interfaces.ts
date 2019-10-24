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

