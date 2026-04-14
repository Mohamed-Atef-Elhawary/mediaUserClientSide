import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { redirectGuard } from './guards/redirect-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'outer', pathMatch: 'full' },
  {
    path: 'outer',
    loadComponent: () => import('./pages/outer-page/outer-page').then((c) => c.OuterPage),
    canActivate: [redirectGuard],
    title: 'MediaFlow',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
    canActivate: [authGuard],
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
    loadComponent: () => import('./components/register/register').then((c) => c.Register),
  },

  ///////////////////////////////////////////////////////////

  // {
  //   path: 'f',
  //   loadComponent: () => import('./components/home-footer/home-footer').then((c) => c.HomeFooter),
  // },
];
