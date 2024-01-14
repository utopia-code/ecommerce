import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defectImg'
})
export class DefectImgPipe implements PipeTransform {

  transform(value: string): string {
    if (value == '') {
      return 'assets/images/placeholder.jpg';
    } else {
      return value;
    }
  }
}
