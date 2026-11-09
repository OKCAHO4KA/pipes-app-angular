import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/locale.service';
registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeRu, 'ru');
  
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      // useValue: 'en'
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale()
    }
  ]
};
