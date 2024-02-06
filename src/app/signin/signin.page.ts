import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  u:string ='';
  p:string = '';
  m:string = '';
  password1:string = '';
  password2:string = '';

  p1:boolean = true;
  p2:boolean = true;
  constructor(private signIn:SigninService) { }

  ngOnInit() {}

async signin(){
  const respuesta = await this.signIn.signInAuth(this.u, this.password1, this.m);
}

  togglePass(letra:string){
    if(letra== 'a'){
      this.p1 = !this.p1;
    }
    if(letra == 'b'){
      this.p2 = !this.p2;
    }
  }

}
