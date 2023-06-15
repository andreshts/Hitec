import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../components/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../../components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../../components/client/client.module').then(
        (m) => m.ClientModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../../components/reports/reports.module').then(
        (m) => m.ReportsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../../components/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../../components/km-control/km-control.module').then(
        (m) => m.KmControlModule
      ),
  },
];
