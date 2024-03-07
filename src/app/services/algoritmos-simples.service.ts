import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AlgoritmosSimplesService {
  //ordenamiento bubblesort
  //ordenamiento double bubblesort
  //numeros primos 
  //serie fibonacci
  esprimo(n:number):number{
    if(n<=1){
      return 0;
    }
    for(let i = 2; i <= n/2; i++){
      if(n%i == 0){
        return 0;
      }
    }
    return 1;
  }
  fibonacci(n: number):number[]{
    let fibo=[0,1,5,2,6];
    for(let i=2; i<=n; i++){
      fibo[i] = fibo[i-1] + fibo[i-2];
      //fibo.push(fibo[i-1]+ fibo[i-2]);
    }
    return fibo;
  }
  constructor() { }
}
