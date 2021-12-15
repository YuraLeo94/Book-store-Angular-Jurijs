import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedDialogRoutingModule } from './completed-dialog-routing.module';
import { CompletedDialogComponent } from './completed-dialog.component';


@NgModule({
  declarations: [
    CompletedDialogComponent
  ],
  imports: [
    CommonModule,
    CompletedDialogRoutingModule
  ]
})
export class CompletedDialogModule { }
