import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { TranslationService } from './core/services/translation.service';
import { ThemeService } from './core/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: (ts: TranslationService) => () => ts.init(),
      deps: [TranslationService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (themeService: ThemeService) => () => themeService.init(),
      deps: [ThemeService],
      multi: true
    }
  ]
};

