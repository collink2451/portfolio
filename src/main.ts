import { bootstrapApplication } from '@angular/platform-browser';
import AOS from 'aos';
import { App } from './app/app';
import { appConfig } from './app/app.config';

AOS.init({
  duration: 800,
  once: true,
});

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
