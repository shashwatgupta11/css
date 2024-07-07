import { Routes } from '@angular/router';
import { PracticeComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { BdoMalasiaDahboardComponent } from './bdo-malasia-dahboard/bdo-malasia-dahboard.component';
import { LayoutComponent } from './layout/layout.component';
import { Layout1Component } from './layout1/layout1.component';
import { DtcComponent } from './dtc/dtc.component';
import { DtcSecondPgComponent } from './dtc-second-pg/dtc-second-pg.component';
import { BootstrapMadeWebsiteComponent } from './bootstrap-made-website/bootstrap-made-website.component';

export const routes: Routes = [
  { path: '', component: BootstrapMadeWebsiteComponent },
  { path: 'first', component: AppComponent },
];
