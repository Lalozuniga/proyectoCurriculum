import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiWeatherPageRoutingModule } from './api-weather-routing.module';

import { ApiWeatherPage } from './api-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiWeatherPageRoutingModule
  ],
  declarations: [ApiWeatherPage]
})
export class ApiWeatherPageModule {}
