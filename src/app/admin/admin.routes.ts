import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard.component').then(m => m.AdminDashboardComponent)
      },
      {
        path: 'appointments',
        loadComponent: () => import('./pages/appointments.component').then(m => m.AdminAppointmentsComponent)
      },
      {
        path: 'customers',
        loadComponent: () => import('./pages/customers.component').then(m => m.AdminCustomersComponent)
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services.component').then(m => m.AdminServicesComponent)
      },
      {
        path: 'staff',
        loadComponent: () => import('./pages/staff.component').then(m => m.AdminStaffComponent)
      },
      {
        path: 'reports',
        loadComponent: () => import('./pages/reports.component').then(m => m.AdminReportsComponent)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./pages/analytics.component').then(m => m.AdminAnalyticsComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings.component').then(m => m.AdminSettingsComponent)
      }
    ]
  }
];
