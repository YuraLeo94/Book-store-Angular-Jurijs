import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedDialogComponent } from './completed-dialog.component';

const routes: Routes = [{ path: '', component: CompletedDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedDialogRoutingModule { }
