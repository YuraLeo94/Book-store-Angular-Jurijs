import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingDialogComponent } from './shopping-dialog.component';

const routes: Routes = [{ path: '', component: ShoppingDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingDialogRoutingModule { }
