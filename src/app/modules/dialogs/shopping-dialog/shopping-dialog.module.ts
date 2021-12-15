import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingDialogRoutingModule } from './shopping-dialog-routing.module';
import { ShoppingDialogComponent } from './shopping-dialog.component';


@NgModule({
  declarations: [
    ShoppingDialogComponent
  ],
  imports: [
    CommonModule,
    ShoppingDialogRoutingModule
  ]
})
export class ShoppingDialogModule { }
