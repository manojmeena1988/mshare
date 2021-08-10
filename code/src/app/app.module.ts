import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ConfirmationDialog } from './confirm-dialog/confirmation-dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from "@angular/router";
import {  Component } from '@angular/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
 import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimationComponent } from './animation/animation.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowUserDataComponent } from './show-user-data/show-user-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const appRoutes:Routes=[
{path: '',component:LoginComponent},
{path: 'resetpassword',component:ForgotpasswordComponent},
{path:'dashboard',component:DashboardComponent },
{path:'dashboard/register',component:RegisterComponent},
{path:'dashboard/user',component:UserComponent},
{path:'dashboard/user/edit',component:EditUserComponent},
{ path:'userlogin',component:ShowUserDataComponent},
{ path:'userpaymentdetail',component:UserDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    LoginComponent,
    DashboardComponent,
    AnimationComponent,
    RegisterComponent,
    UserComponent,
    EditUserComponent,
    ShowUserDataComponent,
    UserDetailComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
