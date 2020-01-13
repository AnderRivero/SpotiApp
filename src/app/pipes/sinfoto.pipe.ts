import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): any {
    let defaultImg = 'assets/img/noimage.png';

    if(!value){
      return defaultImg;
    }
    
    return (value.length > 0) ? value[1].url : defaultImg;
  }

}
