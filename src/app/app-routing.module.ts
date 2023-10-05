import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealTermsComponent } from './deal-terms/deal-terms.component';
import { BodyComponent } from './dashboard/body/body.component';
import { TableComponent } from './table/table.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent},
  { path: 'table', component: TableComponent},
  { path: 'analytics', component: AnalyticsComponent},
  
  
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
