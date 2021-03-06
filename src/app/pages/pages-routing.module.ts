import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: "home",
    component: PagesComponent,
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule),
  },
]


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
