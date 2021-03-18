import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  exports: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'yp-angular.us.auth0.com',
      clientId: 'o0xnjpiivTDzTRrBwErF2r4sOEey2SYd',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
  ],
})
export class Auth {}
