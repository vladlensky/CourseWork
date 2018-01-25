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
import {GadgetsComponent} from './gadgets/gadgets.component';
import {SpecializationsComponent} from './specializations/specializations.component';
import {UpgradesComponent} from './upgrades/upgrades.component';

export const router: Routes = [
  {path: '', redirectTo: 'battlefield', pathMatch: 'full'},
  {path: 'battlefield', canActivate: [AuthGuard], component: RegistrationFormComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'signIn', component: SignInFormComponent},
  {path: 'top', canActivate: [AuthGuard], component: TopComponent},
  {path: 'stats/:Nickname', canActivate: [AuthGuard], component: MainPageComponent},
  {path: 'stats', canActivate: [AuthGuard], component: MainPageComponent},
  {path: 'weapons', canActivate: [AuthGuard], component: WeaponsComponent},
  {path: 'gadgets', canActivate: [AuthGuard], component: GadgetsComponent},
  {path: 'gadgets/:Nickname', canActivate: [AuthGuard], component: GadgetsComponent},
  {path: 'weapons/:Nickname', canActivate: [AuthGuard], component: WeaponsComponent},
  {path: 'specializations', canActivate: [AuthGuard], component: SpecializationsComponent},
  {path: 'specializations/:Nickname', canActivate: [AuthGuard], component: SpecializationsComponent},
  {path: 'weaponInfo/:name', canActivate: [AuthGuard], component: UpgradesComponent},
  ];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
