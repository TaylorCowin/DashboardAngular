import { appRoutes } from './../routes';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionCasesComponent } from './sections/section-cases/section-cases.component';
import { SectionDeathsComponent } from './sections/section-deaths/section-deaths.component';
import { SectionAboutComponent } from './sections/section-about/section-about.component';
import { SectionPrefsComponent } from './sections/section-prefs/section-prefs.component';
import { SectionResourcesComponent } from './sections/section-resources/section-resources.component';
import { SectionDataComponent } from './sections/section-data/section-data.component';
import { SectionAdminLoginComponent } from './sections/section-admin-login/section-admin-login.component';
import { SectionAdminTableComponent } from './sections/section-admin-table/section-admin-table.component';
import { SectionAdminDashComponent } from './sections/section-admin-dash/section-admin-dash.component';
import { SectionAdminDetailsComponent } from './sections/section-admin-details/section-admin-details.component';
import { SectionCasesDetailsComponent } from './sections/section-cases-details/section-cases-details.component';
import { SectionCasesDeathsComponent } from './sections/section-cases-deaths/section-cases-deaths.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SectionCasesComponent,
    SectionDeathsComponent,
    SectionAboutComponent,
    SectionPrefsComponent,
    SectionResourcesComponent,
    SectionDataComponent,
    SectionAdminLoginComponent,
    SectionAdminTableComponent,
    SectionAdminDashComponent,
    SectionAdminDetailsComponent,
    SectionCasesDetailsComponent,
    SectionCasesDeathsComponent,
    SectionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
