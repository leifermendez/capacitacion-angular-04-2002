import { DateInterface } from './date.interface';
import { IdInterface } from './id.interface';
import { UserInterface } from './user.interface';

//TODO Tareas! que obvio un ID
export interface TaskInterface extends IdInterface, DateInterface {
  title: string;
  description: string;
  user: UserInterface;
}
