import { Component } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private redireccionamiento:RedireccionamientoService) {}

  nav(data:string){
    this.redireccionamiento.redireccion(data)
  }

  isMenuActive = false;
  skills = ['HTML/CSS', 'JavaScript', 'PHP', 'Python', 'NodeJS', 'Angular'];

  @ViewChild('menuList') menuList: any;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;

    if (this.isMenuActive) {
      setTimeout(() => {
        this.menuList.nativeElement.classList.add('active');
      }, 0);
    } else {
      this.menuList.nativeElement.classList.remove('active');
    }
  }
  
}
