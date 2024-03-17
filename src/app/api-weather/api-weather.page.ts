import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiWeatherService } from '../services/api-weather.service';
import { NavController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-api-weather',
  templateUrl: './api-weather.page.html',
  styleUrls: ['./api-weather.page.scss'],
})
export class ApiWeatherPage implements OnInit {
  weather:any;
  cpaises:any;
  a:any;
  b:any;

  constructor(private loadingController:LoadingController,
    private alertController:AlertController,
    private weatherser:ApiWeatherService,
    private navCtrl:NavController) { }

  ngOnInit() {
    this.paisdata();
    localStorage.setItem('asd', 'api weather');

  }
  async paisdata() {
    try {
      const respuestapais = await axios.get('https://restcountries.com/v3.1/all?fields=name,cca2');
      
      if (respuestapais) {
        this.cpaises = respuestapais.data;
        
        // Agregar España manualmente si no está presente en la respuesta
        const espana = this.cpaises.find((pais: any) => pais.cca2 === 'ES');
  
        if (!espana) {
          this.cpaises.push({
            name: {
              common: 'Spain'
            },
            cca2: 'ES'
          });
        }
  
        // Ordenar la lista
        this.cpaises.sort((a: { name: { common: any; }; }, b: { name: { common: any; }; }) => (a.name.common) > (b.name.common) ? 1 : -1);
      } else {
        alert('No se encontró conexión a países');
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  get_weather(city:string, country:string){
    this.weatherser.getWeather(city, country).subscribe(
      res =>{
        console.log(res);
        this.weather=res;
      },
      err =>console.log(err)
    )
  }
  submitweather(City: HTMLInputElement, country: HTMLSelectElement) {
    console.log(country.value, City.value);
    this.get_weather(City.value, country.value);
    City.value = '';
    country.value = '';
    City.focus();
    return false;
  }
  

  async loading(mensaje: string){
    await this.load(mensaje);
    await this.dissmiss();
  }
  async load(mensaje: string) {
    const carga = await this.loadingController.create({
      message: mensaje
    });
    await carga.present();
  }
  async dissmiss(){
    await this.loadingController.dismiss();
  }
  
}
