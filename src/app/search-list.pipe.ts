import { UserInterface } from './core/interfaces/user.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchList'
})
export class SearchListPipe implements PipeTransform {

  transform(users:UserInterface[], datoABuscar:string | undefined): any {

    if(datoABuscar){
      const usersParse = users.filter((user) => user.title === datoABuscar)
      console.log('-->',datoABuscar)
      console.log('-->',usersParse)
      console.log(users)
      return usersParse;
    }else{
      return users
    }

  }

}
