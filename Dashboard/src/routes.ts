import { Routes } from '@angular/router';
import { SectionCasesComponent } from './app/sections/section-cases/section-cases.component';
import { SectionAboutComponent } from './app/sections/section-about/section-about.component';
import { SectionPrefsComponent } from './app/sections/section-prefs/section-prefs.component';
import { SectionAdminLoginComponent } from './app/sections/section-admin-login/section-admin-login.component';
import { SectionDataComponent } from './app/sections/section-data/section-data.component';
import { SectionResourcesComponent } from './app/sections/section-resources/section-resources.component';


export const appRoutes: Routes = [
  { path: 'cases', component: SectionCasesComponent },
  { path: 'about', component: SectionAboutComponent },
  { path: 'prefs', component: SectionPrefsComponent },
  { path: 'admin-login', component: SectionAdminLoginComponent },
  { path: 'data', component: SectionDataComponent },
  { path: 'resources', component: SectionResourcesComponent },
  { path: '', redirectTo: '/cases', pathMatch: 'full'},
];
