import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/routes';


  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(APP_ROUTES),
      importProvidersFrom(BrowserModule)
    ],
  }
  );
  