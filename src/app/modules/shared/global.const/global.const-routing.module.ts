import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Global.ConstComponent } from './global.const.component';

const routes: Routes = [{ path: '', component: Global.ConstComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Global.ConstRoutingModule { }
