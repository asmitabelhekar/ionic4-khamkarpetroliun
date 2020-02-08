import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatebalancerecordPage } from './updatebalancerecord.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatebalancerecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatebalancerecordPageRoutingModule {}
