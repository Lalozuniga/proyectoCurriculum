import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.page.html',
  styleUrls: ['./memorama.page.scss'],
})
export class MemoramaPage implements OnInit {
  totalcards:number=9;
  cards:any[]= [];
  selectedcards:any[]= [];
  currentmove:number= 0;
  coinciden:boolean= false;
  gameon:boolean= false;
  

  constructor() { }

  ngOnInit() {
    this.poblar();
    }
    

    poblar(){
      if(this.gameon== false){
        
      this.cards = [];
      for (let i = 0; i < this.totalcards; i++) {
        let valor = Math.floor(Math.random() * 100); // Generar valores aleatorios para las cartas
        const cartaInterna = {
          id:i,
          activa:false,
          contenido:valor

        };
        this.cards.push({...cartaInterna}); 
        cartaInterna.id+=this.totalcards
        this.cards.push({...cartaInterna});
     
      }
      console.log(this.cards);
      this.cards=this.shuffle(this.cards)
      }
    }

     
    activar(carta: any) {
      if (!carta.activa && this.selectedcards.length < 2) {
          carta.activa = true;
          this.selectedcards.push(carta);
          if (this.selectedcards.length === 2) {
              if (this.selectedcards[0].contenido === this.selectedcards[1].contenido) {
                  // Si las cartas coinciden, mantenerlas activas y limpiar la selección
                  this.selectedcards.forEach(carta => carta.activa = true);
                  this.selectedcards = [];
                  //
                  this.currentmove=this.currentmove+1;
              } else {
                  // Si las cartas no coinciden, voltearlas boca abajo después de un tiempo
                  setTimeout(() => {
                      this.selectedcards.forEach(carta => carta.activa = false);
                      this.selectedcards = [];
                  }, 1000);
              }
          }
      }
      console.log(this.currentmove);
      if(this.currentmove==this.totalcards){
        this.awaitGame(2000);
      }
      console.log("Cartas boca arriba:", this.selectedcards);
  }

  

  // Función para mezclar un arreglo
  shuffle(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  cleargame(){
    this.gameon=true;
    this.cards = [];
    console.log("cleargame");
  }
  
  leercards(){
    console.log("leercards");
    try{	
      const values = document.getElementById("cuantasCartas") as HTMLInputElement;
      this.totalcards = parseInt(values.value);
    }catch(e){
      console.log(e);
    }
  }
  iniciar(){
    this.gameon= false;
    this.currentmove=0;
    this.poblar()
  }
  async awaitGame(timeawait: number) {
    await new Promise(resolve => setTimeout(resolve, timeawait)); // Esperar dos segundos
    this.cleargame(); // Ejecutar cleargame después de esperar dos segundos
  }
  
  
  }


