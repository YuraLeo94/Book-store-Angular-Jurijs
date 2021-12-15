import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCost.PipeComponent } from './display-cost.pipe.component';

const routes: Routes = [{ path: '', component: DisplayCost.PipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayCost.PipeRoutingModule { }
