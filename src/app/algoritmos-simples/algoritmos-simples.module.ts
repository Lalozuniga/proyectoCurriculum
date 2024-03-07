import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlotlyModule } from 'angular-plotly.js';
import { IonicModule } from '@ionic/angular';

import { AlgoritmosSimplesPageRoutingModule } from './algoritmos-simples-routing.module';

import { AlgoritmosSimplesPage } from './algoritmos-simples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlgoritmosSimplesPageRoutingModule,
    PlotlyModule,
  ],
  declarations: [AlgoritmosSimplesPage]
})
export class AlgoritmosSimplesPageModule {}
