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
  markCommentsAsReadedTill?: number;
}

// export class User implements IUser {
//   constructor (
//     public login: string,
//     public email: string,
//     public password: string,
//     public name: string,
//     public surname: string,
//   ) { }
// }
