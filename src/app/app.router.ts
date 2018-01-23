import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {RegistrationFormComponent} from './registration-page/registration-form/registration-form.component';
import {SignInFormComponent} from './registration-page/sign-in-form/sign-in-form.component';
import {AuthGuard} from './app.guard';
import {MainService} from './main.service';
import {TopComponent} from './top/top.component';
import {MainPageComponent} from './main-page/main-page.component';
import {WeaponsComponent} from "./weapons/weapons.component";

export const router: Routes = [
  {path: '', redirectTo: 'battlefield', pathMatch: 'full'},
  // {path: 'timeTO/:Nickname', canActivate: [AuthGuard], component: NetworkComponent},
  {path: 'battlefield', canActivate: [AuthGuard], component: RegistrationFormComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'signIn', component: SignInFormComponent},
  {path: 'top', canActivate: [AuthGuard], component: TopComponent},
  {path: 'stats', canActivate: [AuthGuard], component: MainPageComponent},
  {path: 'weapons', canActivate: [AuthGuard], component: WeaponsComponent},
  // {path: 'friends/:Nickname', canActivate: [AuthGuard], component: NetworkComponent},
  // {path: 'messages', canActivate: [AuthGuard], component: NetworkComponent},
  // {path: 'messages/:Nickname', canActivate: [AuthGuard], component: NetworkComponent},
  // {path: 'news', canActivate: [AuthGuard], component: NetworkComponent},
  ];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
