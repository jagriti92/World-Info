import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalFilter'
})
export class CapitalFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   //if args is empty
    if(args === undefined){
      return value;
    }
//returning the matched value
    return value.filter((val) => {
      let capital = val['capital']; //matching the args value to the value in the response
      return capital.toLowerCase().includes(args.toLowerCase());
    })


  }

  }

