import { Component } from '@angular/core';
import { RedireccionamientoService } from './services/redireccionamiento.service';
import { concat } from 'rxjs';
RedireccionamientoService

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  titulo:string='home';
  constructor(private redireccionamiento:RedireccionamientoService) {}

  onIonWillEnter(){
    //this.titulo = (localStorage.getItem('title'))?localStorage.getItem('title'):this.titulo;
  
  }
  nav(data:string){
    this.redireccionamiento.redireccion(data);
    this.titulo=data.slice(1,data.length)
    //localStorage.setItem('asd', JSON.stringify(data));
  }


}
