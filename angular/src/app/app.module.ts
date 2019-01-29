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
import { JobpostComponent } from './components/job/jobpost/jobpost.component';
import { ViewjobsComponent } from './components/job/viewjobs/viewjobs.component';
import { JobdetailsComponent } from './components/job/jobdetails/jobdetails.component';
import { AdminpenalComponent } from './components/admin/adminpenal/adminpenal.component';
import { HomeComponent } from './components/home/home.component';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { RegadminComponent } from './components/admin/regadmin/regadmin.component';
import { CleanerhomeComponent } from './components/cleaner/cleanerhome/cleanerhome.component';

import { AdvertiserhomeComponent } from './components/advertiser/advertiserhome/advertiserhome.component';
import { AddadvertiserComponent } from './components/admin/addadvertiser/addadvertiser.component';
import { SidemenuComponent } from './components/admin/sidemenu/sidemenu.component';
import { SampleComponent } from './components/admin/sample/sample.component';
import { AddadminComponent } from './components/admin/addadmin/addadmin.component';
import { AddsuperadminComponent } from './components/admin/addsuperadmin/addsuperadmin.component';
import { ChartsComponent } from './components/advertiser/charts/charts.component';
import { SidebarComponent } from './components/advertiser/sidebar/sidebar.component';
import { PendingjobpostsComponent } from './components/admin/pendingjobposts/pendingjobposts.component';
import { AcceptjobpostComponent } from './components/admin/acceptjobpost/acceptjobpost.component';
import { RejectedjobpostComponent } from './components/admin/rejectedjobpost/rejectedjobpost.component';

import { SearchusersComponent } from './components/admin/searchusers/searchusers.component';
import { ReviewcomplainComponent } from './components/admin/reviewcomplain/reviewcomplain.component';
import { CheckedcomplainsComponent } from './components/admin/checkedcomplains/checkedcomplains.component';
import { AddadvertiesmentComponent } from './components/admin/addadvertiesment/addadvertiesment.component';
import { FooterComponent } from './components/advertiser/footer/footer.component';
import { AdvertiserprofileComponent } from './components/advertiser/advertiserprofile/advertiserprofile.component';
import { PostadvertismentComponent } from './components/admin/postadvertisment/postadvertisment.component';
import { ViewadvertismentComponent } from './components/admin/viewadvertisment/viewadvertisment.component';
import { ViewuserprofileComponent } from './components/admin/viewuserprofile/viewuserprofile.component';
import { CustomerhomeComponent } from './components/customer/customerhome/customerhome.component';
import { StatisticsComponent } from './components/advertiser/statistics/statistics.component';
import { ViewcomplainComponent } from './components/admin/viewcomplain/viewcomplain.component';
import { ViewcomplainactionComponent } from './components/admin/viewcomplainaction/viewcomplainaction.component';
import { CleanerSideComponent } from './components/cleaner/cleaner-side/cleaner-side.component';
import { GetallaplliedjobsComponent } from './components/cleaner/getallaplliedjobs/getallaplliedjobs.component';
import { GetdonejobsComponent } from './components/cleaner/getdonejobs/getdonejobs.component';
import { GetnonpaidjobsComponent } from './components/cleaner/getnonpaidjobs/getnonpaidjobs.component';
import { GetpaidjobsComponent } from './components/cleaner/getpaidjobs/getpaidjobs.component';
import { ViewcompletedjobComponent } from './components/customer/viewcompletedjob/viewcompletedjob.component';
import { CustomerSideComponent } from './components/customer/customer-side/customer-side.component';
import { ViewactivejobComponent } from './components/customer/viewactivejob/viewactivejob.component';
import { ViewsingleadvertiesmentComponent } from './components/admin/viewsingleadvertiesment/viewsingleadvertiesment.component';
import { ViewcuspromotedjobComponent } from './components/customer/viewcuspromotedjob/viewcuspromotedjob.component';
import { ViewappliedcleanersComponent } from './components/customer/viewappliedcleaners/viewappliedcleaners.component';
import { RunningjobsComponent } from './components/cleaner/runningjobs/runningjobs.component';



const applicationRoutes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'jobpost',component:JobpostComponent, canActivate: [AuthGuard]},
  {path:'viewjobs',component:ViewjobsComponent},
  {path:'viewjobs/:postid',component:JobdetailsComponent},
  {path:'alljobpost',component:AdminpenalComponent, canActivate: [AuthGuard]},
  {path:'alljobpost/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'pendingjobpost',component:PendingjobpostsComponent, canActivate: [AuthGuard]},
  {path:'pendingjobpost/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'acceptedjobpost',component:AcceptjobpostComponent, canActivate: [AuthGuard]},
  {path:'acceptedjobpost/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'rejectedjobpost',component:RejectedjobpostComponent, canActivate: [AuthGuard]},
  {path:'rejectedjobpost/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'adminhome',component:AdminhomeComponent, canActivate: [AuthGuard]},
  {path:'advertiserhome',component:AdvertiserhomeComponent, canActivate: [AuthGuard]},
  {path:'regadmin',component:RegadminComponent, canActivate: [AuthGuard]},
  {path:'cleanerhome',component:CleanerhomeComponent, canActivate: [AuthGuard]},
  {path:'addadvertiser',component:AddadvertiserComponent, canActivate: [AuthGuard]},
  {path:'addadmin',component:AddadminComponent, canActivate: [AuthGuard]},
  {path:'addsuperadmin',component:AddsuperadminComponent, canActivate: [AuthGuard]},
  {path:'sample',component:SampleComponent, canActivate: [AuthGuard]},
  {path:'searchusers',component:SearchusersComponent, canActivate: [AuthGuard]},
  {path:'reviewcomplain',component:ReviewcomplainComponent, canActivate: [AuthGuard]},
  {path:'checkedcomplains',component:CheckedcomplainsComponent, canActivate: [AuthGuard]},
  {path:'addadvertiesment',component:AddadvertiesmentComponent, canActivate: [AuthGuard]},
  {path:'postadvertisment',component:PostadvertismentComponent, canActivate: [AuthGuard]},
  {path:'advertiserProfile',component:AdvertiserprofileComponent,canActivate:[AuthGuard]},
  {path:'viewadvertisments',component:ViewadvertismentComponent, canActivate: [AuthGuard]},
  {path:'searchusers/:username',component:ViewuserprofileComponent, canActivate: [AuthGuard]},

  {path:'statistics',component:StatisticsComponent, canActivate: [AuthGuard]},

  {path:'customerhome',component:CustomerhomeComponent, canActivate: [AuthGuard]},
  {path:'reviewcomplain/:complainid',component:ViewcomplainComponent, canActivate: [AuthGuard]},
  {path:'reviewcomplainaction/:actcomplainid',component:ViewcomplainactionComponent, canActivate: [AuthGuard]},
  {path:'viewcomplain/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'jobview/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'getallappliedjobs',component:GetallaplliedjobsComponent, canActivate: [AuthGuard]},
  {path:'getdonejobs',component:GetdonejobsComponent, canActivate: [AuthGuard]},
  {path:'cleanerhome/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'getnonpaidjobs',component:GetnonpaidjobsComponent, canActivate: [AuthGuard]},
  {path:'getpaidjobs',component:GetpaidjobsComponent, canActivate: [AuthGuard]},
  {path:'viewcompletedjob',component:ViewcompletedjobComponent, canActivate: [AuthGuard]},
  {path:'viewactivejob',component:ViewactivejobComponent, canActivate: [AuthGuard]},
  {path:'viewadvertisments/:advertiesmentid',component:ViewsingleadvertiesmentComponent, canActivate: [AuthGuard]},
  {path:'viewcuspromotedjob',component:ViewcuspromotedjobComponent, canActivate: [AuthGuard]},
  {path:'customerhome/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'appliedcleaners/:postid',component:ViewappliedcleanersComponent, canActivate: [AuthGuard]},
  {path:'runningjobs',component:RunningjobsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    JobpostComponent,
    ViewjobsComponent,
    JobdetailsComponent,
    AdminpenalComponent,
    HomeComponent,
    AdvertiserhomeComponent,
    AddadvertiserComponent,
    AdminhomeComponent,
    RegadminComponent,
    CleanerhomeComponent,
    SidemenuComponent,
    SampleComponent,
    AddadminComponent,
    AddsuperadminComponent,
    ChartsComponent,
    SidebarComponent,
    PendingjobpostsComponent,
    AcceptjobpostComponent,
    RejectedjobpostComponent,
    SearchusersComponent,
    ReviewcomplainComponent,
    CheckedcomplainsComponent,
    AddadvertiesmentComponent,
    FooterComponent,
    AdvertiserprofileComponent,
    PostadvertismentComponent,
    ViewadvertismentComponent,
    ViewuserprofileComponent,
    CustomerhomeComponent,
    StatisticsComponent,
    ViewcomplainComponent,
    ViewcomplainactionComponent,
    CleanerSideComponent,
    GetallaplliedjobsComponent,
    GetdonejobsComponent,
    GetnonpaidjobsComponent,
    GetpaidjobsComponent,
    ViewcompletedjobComponent,

    CustomerSideComponent,
    ViewactivejobComponent,
    ViewsingleadvertiesmentComponent,
    ViewcuspromotedjobComponent,
    ViewappliedcleanersComponent,
    RunningjobsComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes),
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
