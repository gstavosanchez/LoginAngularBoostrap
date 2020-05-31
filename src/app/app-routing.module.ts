import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Comepentes
import { IndexComponent } from './components/index/index.component'
import { PrivateUserComponent } from './components/private-user/private-user.component'
import { SigninComponent } from './components/signin/signin.component'
import { SignupComponent } from './components/signup/signup.component'

import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/index',
    pathMatch:'full'
  },
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'private',
    component:PrivateUserComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
