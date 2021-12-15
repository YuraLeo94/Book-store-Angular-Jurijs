import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackButtonComponent } from './back-button.component';

const routes: Routes = [{ path: '', component: BackButtonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackButtonRoutingModule { }
