import { Pipe, PipeTransform } from '@angular/core';
import { DropwondService } from './dropwond.service';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  constructor(private service:DropwondService){}

  transform(value: any ) {

    console.log(value);
    
    let a = this.service.getCountries();
    // console.log(a);
    
      let b = a.filter((country:any) => country.shortName === value);
      // console.log(b);
      
      // console.log(b[0].name);
    return b[0].name;
  }

}
