import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' //ngmodel
import { HttpClientModule } from '@angular/common/http'///Fundamenta de importar

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { IndexComponent } from './components/index/index.component';
import { PrivateUserComponent } from './components/private-user/private-user.component';

import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' /// Para la validacion de rutas

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe'; /// Para el buscador


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    IndexComponent,
    PrivateUserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
