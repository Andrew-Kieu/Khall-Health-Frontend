import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { NursePageComponent } from './nurse-page/nurse-page.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';
import { SignUpComponent } from './sign-Up/sign-up.component';
import { HospitalSearchComponent } from './hospital-search/hospital-search.component';
import { ApplicationSearchComponent } from './application-search/application-search.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import path from 'path';

export const routes: Routes = [
    {path: '', component: HomeComponent}, 
    {path: 'about', component: AboutComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'contact', component: ContactComponent}, 
    {path: 'signIn', component: SignInComponent},
    {path: 'signOut', component: SignOutComponent},
    {path: 'nurse-page', component: NursePageComponent},
    {path: 'nurse-form', component: NurseFormComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: 'hospital-search', component: HospitalSearchComponent},
    {path: 'application-search', component: ApplicationSearchComponent},
    {path: 'hospital-form', component: HospitalFormComponent},
    {path: 'job-form', component: JobFormComponent}
];
