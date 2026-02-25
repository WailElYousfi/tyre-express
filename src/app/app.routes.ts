import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Tyre-Express | Mobile Tire Service Belgium'
  },
  {
    path: 'book',
    loadComponent: () =>
      import('./features/booking/booking.component').then(m => m.BookingComponent),
    title: 'Book Your Service | Tyre-Express'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Our Services | Tyre-Express'
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./features/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent),
    title: 'How It Works | Tyre-Express'
  },
  {
    path: 'service-area',
    loadComponent: () =>
      import('./features/service-area/service-area.component').then(m => m.ServiceAreaComponent),
    title: 'Service Area | Tyre-Express'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Tyre-Express'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Tyre-Express'
  },
  {
    path: 'tyre-markings',
    loadComponent: () =>
      import('./features/tyre-markings/tyre-markings.component').then(m => m.TyreMarkingsComponent),
    title: 'Tyre Sidewall Markings Guide | Tyre-Express'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(m => m.LoginComponent),
    title: 'Sign In | Tyre-Express'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

