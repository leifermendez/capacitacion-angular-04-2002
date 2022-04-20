import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {

  transform(value:number, currency:string): string {
    console.log('Datos entrantes ',value)
    return `${value} ${currency}`
  }

}
