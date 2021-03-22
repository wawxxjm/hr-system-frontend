import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegiWithTokenComponent } from './components/regi-with-token/regi-with-token.component';
import { NormalUserComponent } from './components/login/normal-user/normal-user.component';
import { HrComponent } from './components/login/hr/hr.component';
import { PersonalInfoComponent } from './components/util/personal-info/personal-info.component';
import { AllVisaStatusComponent } from './components/login/hr/all-visa-status/all-visa-status.component';
import { HireComponent } from './components/login/hr/hire/hire.component';
import { HouseManagementComponent } from './components/login/hr/house-management/house-management.component';
import { PersonalVisaStatusComponent } from './components/login/normal-user/personal-visa-status/personal-visa-status.component';
import { PersonalHousingComponent } from './components/login/normal-user/personal-housing/personal-housing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegiWithTokenComponent,
    NormalUserComponent,
    HrComponent,
    PersonalInfoComponent,
    AllVisaStatusComponent,
    HireComponent,
    HouseManagementComponent,
    PersonalVisaStatusComponent,
    PersonalHousingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
