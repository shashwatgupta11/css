import { Routes } from '@angular/router';
import { PracticeComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { BdoMalasiaDahboardComponent } from './bdo-malasia-dahboard/bdo-malasia-dahboard.component';

export const routes: Routes = [
  { path: '', component: BdoMalasiaDahboardComponent },
  { path: 'first', component: AppComponent },
];
