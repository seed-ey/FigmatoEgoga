import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { BodyComponent } from './dashboard/body/body.component';
import { DatePipe } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { DealTermsComponent } from './deal-terms/deal-terms.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { Chart, registerables } from 'node_modules/chart.js';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    DealTermsComponent,
    NavbarComponent,
    TableComponent,
    AdminComponent,
    PaginationComponent,
    AnalyticsComponent,
    AuthComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,

  ],
  providers: [
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
