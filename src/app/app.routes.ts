import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/pages/login-component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedLayoutComponent } from './@core/layouts/shared-layout/shared-layout.component';
import { AuthGuard } from './@core/guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: SharedLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'admin',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'products',
            loadChildren: () =>
              import('./pages/products/products.module').then(m => m.ProductsModule)
          }
        ]
      },
    ]
  },


  { path: '**', redirectTo: 'login' }
];