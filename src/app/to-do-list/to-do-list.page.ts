import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {
  listaTareas: string[] = [];
  constructor() { }

  ngOnInit() {
  }
// Función para agregar un nuevo elemento a la lista de tareas
agregarItem() {
  const nuevoItem = prompt('Ingrese el nuevo ítem:');
  if (nuevoItem !== null && nuevoItem !== '') {
    this.listaTareas.push(nuevoItem);
  }
  console.log(this.listaTareas);
}
}
