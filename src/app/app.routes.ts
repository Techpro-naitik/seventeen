import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './common-components/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
];
