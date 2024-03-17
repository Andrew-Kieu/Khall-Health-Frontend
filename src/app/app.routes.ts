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

export const routes: Routes = [
    {path: '', component: HomeComponent}, 
    {path: 'about', component: AboutComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'contact', component: ContactComponent}, 
    {path: 'signIn', component: SignInComponent},
    {path: 'signOut', component: SignOutComponent},
    {path: 'nurse-page', component: NursePageComponent},
    {path: 'nurse-form', component: NurseFormComponent},
    {path: 'signUp', component: SignUpComponent}
];
