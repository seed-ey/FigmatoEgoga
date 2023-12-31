import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealTermsComponent } from './deal-terms/deal-terms.component';
import { BodyComponent } from './dashboard/body/body.component';
import { TableComponent } from './table/table.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent},
    { path: 'table', component: TableComponent},
    { path: 'analytics', component: AnalyticsComponent},
    { path: 'admin', component: AdminComponent},

  ]},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  
  
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
