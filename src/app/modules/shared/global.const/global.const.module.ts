import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Global.ConstRoutingModule } from './global.const-routing.module';
import { Global } from './global.const.component';


@NgModule({
  declarations: [
    Global.ConstComponent
  ],
  imports: [
    CommonModule,
    Global.ConstRoutingModule
  ]
})
export class Global.ConstModule { }
