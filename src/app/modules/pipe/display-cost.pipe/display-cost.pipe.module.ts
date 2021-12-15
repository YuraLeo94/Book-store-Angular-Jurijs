import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayCost.PipeRoutingModule } from './display-cost.pipe-routing.module';
import { DisplayCost } from './display-cost.pipe.component';


@NgModule({
  declarations: [
    DisplayCost.PipeComponent
  ],
  imports: [
    CommonModule,
    DisplayCost.PipeRoutingModule
  ]
})
export class DisplayCost.PipeModule { }
