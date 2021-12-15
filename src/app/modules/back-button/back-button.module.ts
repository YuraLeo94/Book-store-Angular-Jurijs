import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackButtonRoutingModule } from './back-button-routing.module';
import { BackButtonComponent } from './back-button.component';


@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    BackButtonRoutingModule
  ]
})
export class BackButtonModule { }
