import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionFilter'
})
export class SubregionFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(args===undefined)
    {
      return value;
    }

    return value.filter((val)=>{ //matching the value of args with the subregion key of the api response
      let subregion = val['subregion'];
      return subregion.toLowerCase().includes(args.toLowerCase());
    })
  }

}
