import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { NursePageComponent } from './nurse-page/nurse-page.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HospitalSearchComponent } from './hospital-search/hospital-search.component';
// import { ApplicationPageComponent } from './application-search/application-search.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import { ChoosingRoleComponent } from './choosing-role/choosing-role.component';
import { HospitalSignUpComponent } from './hospital-sign-up/hospital-sign-up.component';
import { EditNurseComponent } from './edit-nurse/edit-nurse.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { EditHospitalComponent } from './edit-hospitals/edit-hospitals.component';
import { EditJobsComponent } from './edit-jobs/edit-jobs.component';
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
    // {path: 'application-search', component: ApplicationPageComponent},
    {path: 'hospital-form', component: HospitalFormComponent},
    {path: 'job-form', component: JobFormComponent},
    {path: 'choosing-role', component: ChoosingRoleComponent },
    {path: 'hospital-signUp', component: HospitalSignUpComponent},
    { path: 'editNurse/:id', component: EditNurseComponent },
    { path: 'editNurse/', component: EditNurseComponent },
    {path: 'tools-page', component: ToolsPageComponent},
    {path: 'editHospital/:id', component: EditHospitalComponent },
    {path: 'editJobs/:id', component: EditJobsComponent}
];
