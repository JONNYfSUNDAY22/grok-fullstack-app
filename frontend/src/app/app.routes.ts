import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Vehicles } from './vehicles/vehicles';
import { Home } from './home/home';
import { MemberSubscribe } from './member-subscribe/member-subscribe';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'member-subscribe', component: MemberSubscribe },
  { path: 'vehicles', component: Vehicles, canActivate: [authGuard] },
];