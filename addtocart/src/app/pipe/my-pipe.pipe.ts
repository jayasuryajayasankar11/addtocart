import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {

  transform(value: string): unknown {
    return value + 'welcome3425345435';
  }

}
