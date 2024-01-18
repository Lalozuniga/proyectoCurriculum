import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  isLoggedIn: boolean = false;
  constructor() { }
  //*Aqui empieza login fun
  async login(u:string, p:string){
    if(u == ''|| p == ''){
      return false;
    }
    if(await !this.uChecker(u)|| await !this.pChecker(p)){

    }
    //*authFirebase()<-- si existe el ususario, regresa
    return await this.authFirebase(u,p);
  }
  //aqui termina loginfun
  //!'/[a-zA-Z0-9_-]+@+[a-zA-Z0-9_-]+[a-zA-Z]{2,}/'
  async uChecker(u:string){
  return /[a-zA-Z0-9_-@.]/.test(u);
}
async pChecker(p:string){
  if(p.length<8 || !/[A-Za-z0-9-=!-_]/.test(p)){
    return false;
  }
  return true;
}
async authFirebase(u:string,p:string){
  try{
    const resultado = await firebase.auth().signInWithEmailAndPassword(u,p);
    if(resultado.user && resultado.user.uid){
      this.setLogginState(u, resultado.user.uid);


      this.setLoggin();
      return true;
    }
    //NO puede acceder
    return false;
  }
  catch(e){
    console.log(e);
    return false;
  }
  return true;
}
setLogginState(u:string, uid:any){
  localStorage.setItem('uid',JSON.stringify(uid));
  localStorage.setItem('user',JSON.stringify(u));
  localStorage.setItem('level',JSON.stringify(1));
}
setLoggin(){
  this.isLoggedIn= !this.isLoggedIn;
}
}
