export interface ApiUserInfo {
  name: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  address: { line1: string; line2: string };
  image?: string;
  _id: string;
}
