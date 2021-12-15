import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Truncate.PipeComponent } from './truncate.pipe.component';

const routes: Routes = [{ path: '', component: Truncate.PipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Truncate.PipeRoutingModule { }
