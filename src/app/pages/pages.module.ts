import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ComponentsModuleModule } from '../components/components-module.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModuleModule,

    ],
})
export class PagesModule {}
