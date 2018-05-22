import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(value: any, term ? : any): any {

      if (term === undefined) {
          return value;
      }
//matching the args value with the value enterd by user
      return value.filter((val) => {
          return val.name.toLowerCase().includes(term.toLowerCase());
      })


  }

}
