import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from "@angular/router";
import { DashboardService } from "./dashboard.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoutes:Routes=[
  {path: '',component:DashboardComponent }

  
  ];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(appRoutes)
  ],
  providers: [ DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
