export interface UserModel {
  id: number;
  username: string;
  name: string;
  lastname: string;
  picturePath: URL;
  admin: boolean; //possible?
}
