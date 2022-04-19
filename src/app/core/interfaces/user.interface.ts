export interface UserInterface {
  email: string;
  name: string;
  id: string | number;
  avatar: string;
  role: 'admin' | 'user' | 'manager';
}
