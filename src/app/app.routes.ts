import { Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { AppComponent } from './app.component';

export const routes: Routes = [ { path: '', component: PracticeComponent },
{ path: 'first', component: AppComponent },];

