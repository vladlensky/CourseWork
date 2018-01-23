
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { SpecializationsComponent } from './specializations/specializations.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    LanguageComponent,
    GadgetsComponent,
    SpecializationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthGuard, MainService, CookieService,
    { provide: 'translate_i18n_ru', useValue: require('../assets/i18n/ru.json'), multi: true },
    { provide: 'translate_i18n_en', useValue: require('../assets/i18n/en.json'), multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
