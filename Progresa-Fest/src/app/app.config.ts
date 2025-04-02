import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router'; // Import provideRouter and the Routes type (for type checking)
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes'; // Import the 'routes' constant

export const appConfig: ApplicationConfig = {
providers: [
provideZoneChangeDetection({ eventCoalescing: true }),
provideRouter(routes), // Pass the 'routes' constant here
provideClientHydration(withEventReplay()),
],
};
