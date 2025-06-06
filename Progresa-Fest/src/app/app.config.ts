import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router'; // Import provideRouter and the Routes type (for type checking)
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes'; // Import the 'routes' constant
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideClientHydration(withEventReplay())]
  };
