import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PracticeComponent } from './app/practice/practice.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
