import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,arg: string): any {
    const resultPost  = [];
    //console.log(value)
    if(arg == '' || arg.length < 3 ) return value;
    value.forEach(user => {
      if(user.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 || user.email.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        //console.log(arg)
        resultPost.push(user)
      }
    });
    return resultPost;
  }

}
