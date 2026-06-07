import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Trips } from './pages/trips/trips';
import { Admin } from './pages/admin/admin';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard },
  { path: 'trips', component: Trips },
  { path: 'admin', component: Admin },
  { path: '**', redirectTo: '' }
];