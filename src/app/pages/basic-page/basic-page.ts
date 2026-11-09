import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPageComponent {

localeService = inject(LocaleService);

currentLocale = signal(inject(LOCALE_ID));

changeLocale(locale: AvailableLocale) {
  this.localeService.changeLocale(locale);
}
  nameLower = signal<string>('oxana');
  nameUpper= signal<string>('OXANA');
  fullName = signal<string>('oxAna lUcHko')

  customDate = signal(new Date())

  tickingDateEffect= effect((onCleanUp)=>{
    const interval = setInterval(()=>{
      this.customDate.set(new Date()), 1000
    });
    onCleanUp(()=>{
      clearInterval(interval);
    })
  })
}
