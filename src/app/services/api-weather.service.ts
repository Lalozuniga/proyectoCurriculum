import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {
  key = '7391a675a0c3e3782d9a0651925ae626';
  url:string='';
private api_ubicacion="https://freegeoip.app/json/";

  constructor(private http:HttpClient) {
    this.url=`https://api.openweathermap.org/data/2.5/weather?`;

  }

  getWeather(cityName:string, countrycode:string){
    return this.http.get(`${this.url}q=${cityName},${countrycode}&appid=${this.key}`);
  }
}
