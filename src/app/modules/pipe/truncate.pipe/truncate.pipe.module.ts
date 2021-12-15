import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Truncate.PipeRoutingModule } from './truncate.pipe-routing.module';
import { Truncate } from './truncate.pipe.component';


@NgModule({
  declarations: [
    Truncate.PipeComponent
  ],
  imports: [
    CommonModule,
    Truncate.PipeRoutingModule
  ]
})
export class Truncate.PipeModule { }
