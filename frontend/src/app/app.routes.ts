import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlatComponent } from './flat/flat.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingComponent } from './booking/booking.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SiteAreaComponent } from './site-area/site-area.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageflatComponent } from './manageflat/manageflat.component';

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'flat',component:FlatComponent},
{path:'aboutus',component:AboutUsComponent},
{path:'contactus',component:ContactUsComponent},
{path:'feedback',component:FeedbackComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'adminlogin',component:AdminLoginComponent},

{path:'booking/:id',component:BookingComponent},
{path:'facilities',component:FacilitiesComponent},
{path:'sitearea',component:SiteAreaComponent},
{path:'ourteam',component:OurTeamComponent},
{path:'manageflat',component:ManageflatComponent},
{path:'viewfeedback',component:ViewFeedbackComponent},
{path:'viewregister',component:ViewRegisterComponent},

{path:'logout',component:LogoutComponent}

];
