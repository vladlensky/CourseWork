import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SignInFormComponent } from './registration-page/sign-in-form/sign-in-form.component';
import { RegistrationFormComponent } from './registration-page/registration-form/registration-form.component';
import {MainService} from './main.service';
import {AuthGuard} from './app.guard';
import {routes} from './app.router';
import { TopComponent } from './top/top.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { UpgradesComponent } from './upgrades/upgrades.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    SignInFormComponent,
    RegistrationFormComponent,
    TopComponent,
    MainPageComponent,
    WeaponsComponent,
    UpgradesComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [AuthGuard, MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
