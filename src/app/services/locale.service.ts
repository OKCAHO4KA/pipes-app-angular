import {Injectable, signal} from '@angular/core';


export type AvailableLocale = 'ES' | 'FR' | 'EN' | 'RU';

@Injectable({providedIn: 'root'})
export class LocaleService{

private currentLocale = signal<AvailableLocale>('RU');

constructor(){
    this.currentLocale.set(
        localStorage.getItem('locale') as AvailableLocale ?? 'EN'
    );
}

getLocale(){    
    return this.currentLocale();
}

changeLocale(locale: AvailableLocale){
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
 }

}