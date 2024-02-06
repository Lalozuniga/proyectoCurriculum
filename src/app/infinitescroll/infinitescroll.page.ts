import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {
items: any[] =[{hora:'10:20'}, {hora:'8:02'}];
onIonInfinite(event:any){}

  constructor(private redireccionamiento:RedireccionamientoService) { }

  ngOnInit() {
    this.crearItems();
  }
  crearItems() {
    for(let i =0; i<=50; i++){
      this.items.push({
        hora:''+ Math.floor(Math.random()*23)+':'+ Math.floor(Math.random()*59),
      });
    }
  }
  nav(data:string){
    this.redireccionamiento.redireccion(data)
  }

}
