import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Router } from '@angular/router/src/router';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { JobpostComponent } from './components/jobpost/jobpost.component';

const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'jobpost',component:JobpostComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    JobpostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes),
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
