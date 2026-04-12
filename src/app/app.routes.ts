import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/outer-page/outer-page').then((c) => c.OuterPage),
    title: 'outer',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
    canActivate: [authGuardGuard],
  },

  {
    path: 'doctors',
    loadComponent: () => import('./pages/doctors/doctors').then((c) => c.Doctors),
  },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((c) => c.About) },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((c) => c.Contact),
  },
  // //////////////////////////////////////////////////////////
  {
    path: 'appointment/:docID',
    loadComponent: () => import('./pages/appointment/appointment').then((c) => c.Appointment),
  },
  {
    path: 'register/:state',
    loadComponent: () => import('./pages/appointment/appointment').then((c) => c.Appointment),
  },

  ///////////////////////////////////////////////////////////

  // {
  //   path: 'f',
  //   loadComponent: () => import('./components/home-footer/home-footer').then((c) => c.HomeFooter),
  // },
];
