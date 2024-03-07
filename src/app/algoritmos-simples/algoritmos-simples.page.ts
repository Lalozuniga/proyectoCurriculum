import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { generate } from 'rxjs';
PlotlyModule.plotlyjs = PlotlyJS;
import { AlgoritmosSimplesService } from '../services/algoritmos-simples.service';
//insertar una grafica
//npm install @types/plotly.js-dist-min angular-plotly.js

@Component({
  selector: 'app-algoritmos-simples',
  templateUrl: './algoritmos-simples.page.html',
  styleUrls: ['./algoritmos-simples.page.scss'],
})
export class AlgoritmosSimplesPage implements OnInit {
  public grafica ={data:[
    {x:[1,2,3],y:[4,5,6],type:'bar'}
  ],
layout:{title:'Grafica',width:800, height:800}};
  
  constructor(private redireccionamiento:RedireccionamientoService,private  miObjeto:AlgoritmosSimplesService) {}

  nav(data:string){
    this.redireccionamiento.redireccion(data)
  }

  ngOnInit() {
    this.poblar();
    this.bubbleSort();
    this.generar(100);
  }
  fibonacci:number[] = [];

  primos:number[]=[];


  generar(n: number) {
    this.fibonacci= this.miObjeto.fibonacci(n);
    for(let i=1;i<=n;i++){
      this.primos.push(this.miObjeto.esprimo(i));
    }
  
  }
  bubbleSort(){
    let checked;
    do{
      checked = false;
      for(let i=0;i <this.grafica.data[0].y.length;i++){
        if(this.grafica.data[0].y[i]>this.grafica.data[0].y[i+1]){
          let tmp = this.grafica.data[0].y[i];
          this.grafica.data[0].y[i]= this.grafica.data[0].y[i+1];
          this.grafica.data[0].y[i+1]= tmp;
          checked = true;
        }
      //  this.frames.push({data:this.grafica.data[0]});
      }
    }while(checked){
    //  PlotlyJS.addFrames('graph', this.frames);
    }
   const animacion  = {frame:{duration:500,mode:'immediate', fromcurrent:true}};
   //PlotlyJS.animate('graph', null, animacion);
  }
  poblar(){
    this.poblarX(100);
    this.poblarY(100);
  }
  poblarX(num:number){
    for(let i = 0; i <num; i++){
      this.grafica.data[0].x[i]=i;
    }
  }
  poblarY(num:number){
    for(let i = 0; i <num; i++){
      this.grafica.data[0].y[i] = Math.floor(Math.random()*num)+1;
    }
  }
}
//solo si no tenemos ngOnInit
//onIonViewWillEnter(){}