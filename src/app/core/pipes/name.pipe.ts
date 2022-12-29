import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class NamePipe implements PipeTransform {

  transform(value: string, query: string): unknown {
    if(query === '' || query === undefined) {
      return value;
    }
    var mapObj = {
      a: "4",
      e: "3",
      i: "1",
      o: "0",
      u: "9"
    };
    const str = value.replace(/a|e|i|o|u/gi, function(matched){
      // @ts-ignore
      return mapObj[matched];
    });
    return str
  }

}
