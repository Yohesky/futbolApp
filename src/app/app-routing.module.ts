import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import {AuthGuard} from "./guard/auth.guard"
import { AuthRoutingModule } from './auth/auth-routing.module';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
