import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Vehicles } from './vehicles/vehicles';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'vehicles', component: Vehicles, canActivate: [authGuard] },
];