import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsUrl'
})
export class NewsUrlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return;
    const lineIndex = value.indexOf('/', 8);
    return value.substring(0, lineIndex);
  }
}
