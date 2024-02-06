import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
import { LoginserviceService } from '../services/loginservice.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  showPass:boolean = false;
  user:string = '';
  password:string = '';

  constructor(private navController:NavController, 
    private alertController:AlertController, 
    private redireccionamiento:RedireccionamientoService,
    private loadingController:LoadingController, 
    private loginService: LoginserviceService,
    //private lsc:
    ) { }

  nav(data:string){
    this.redireccionamiento.redireccion(data)
  }
  ngOnInit() {
  }
  togglePassword(){
    this.showPass = !this.showPass;
  }
  async mandarMensaje(mensaje:string,titulo:string){

    const alerta = await this.alertController.create({
      header:titulo,
      message:mensaje,
      buttons:['cerrar']
    });
    await alerta.present();
  }
  async login(){
    await this.presentLoading();
    const result =
    await this.loginService.login(this.user, this.password);
    await this.dismissLoading();
  }
  async presentLoading(){
    const carga = await this.loadingController.create({
      message:'Cargando internet tercermundista'
    });
    await carga.present();
  }
  async dismissLoading(){
    await this.loadingController.dismiss();
  }
}
