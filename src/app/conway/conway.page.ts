import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-conway',
  templateUrl: './conway.page.html',
  styleUrls: ['./conway.page.scss'],
})
export class ConwayPage implements OnInit {
  
  constructor(private redireccionamiento:RedireccionamientoService) {}

  nav(data:string){
    this.redireccionamiento.redireccion(data)
  }
  siguienteTablero:any[][] = [];
  tablero:any[][] = [];
  largo:number = 30;
  alto:number = 30;

  ngOnInit(){
    this.iterar();
    //this.poblar();
  }

  poblar(){
    for(let i=0; i<this.alto; i++){
      this.tablero[i] = [];
      for(let j=0; j<this.largo;j++){
        this.tablero[i][j] = Math.floor(Math.random() *2);
      }
    }
  }
  

  copiarTablero(arregloInput:number[][]):number[][]{
    let copia:number[][] = [];
    for(let i=0;i <this.alto;i++){
      copia[i]=[];
      for(let j=0;j < this.largo;j++){
        copia[i][j]=arregloInput[i][j];
    }
  }
    return copia;
  }

  contar(a: number,b: number):number {
    let vecinos = 0;
    for(let i = -1; i < 2; i++){
      for(let j = -1; j < 2; j++){
        let x = (a + i + this.largo)% this.largo;
        let y = (b + j + this.alto)% this.alto;
        vecinos+= this.tablero[x][y];
      }
    }
    vecinos-=this.tablero[a][b];
    return vecinos;

  }
  actualizarEstado(){
    this.tablero = this.copiarTablero(this.siguienteTablero);
  }

  iterar(){
    this.poblar();
    setInterval(()=>{
      this.contarVecinos();
      this.actualizarEstado();
    },150);
  }

  contarVecinos(){
  this.siguienteTablero=this.copiarTablero(this.tablero);

  for(let i=0;i < this.alto;i++){
    for(let j=0;j < this.largo;j++){
      let numVecinos = this.contar(i,j);
      if(this.tablero[i][j]== 0 && numVecinos==3){
        this.siguienteTablero[i][j] = 1;
  }else if(this.tablero[i][j] == 1 && (numVecinos < 2 || numVecinos > 3)){
    this.siguienteTablero[i][j] = 0;
  }

    }
  }
}
}