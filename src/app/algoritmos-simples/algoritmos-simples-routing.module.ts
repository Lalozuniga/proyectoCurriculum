import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlgoritmosSimplesPage } from './algoritmos-simples.page';

const routes: Routes = [
  {
    path: '',
    component: AlgoritmosSimplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlgoritmosSimplesPageRoutingModule {}
