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
      import('../../components/ecommerce/ecommerce.module').then(
        (m) => m.EcommerceModule
      ),
  },
];
