import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from "@angular/router";

 import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
{path: '',component:LoginComponent},
{path: 'resetpassword',component:ForgotpasswordComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
