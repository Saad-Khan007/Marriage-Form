import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translatePipe'
})
export class TranslatePipePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  
  transform(value: string): string {
    return this.translate.instant(value);
  }

}
