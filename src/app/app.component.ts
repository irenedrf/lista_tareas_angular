import { Component } from '@angular/core';
import { Tarea } from './Tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  arrTareasHechas: Tarea[];
  arrTareasPendientes: Tarea[];

  constructor() {
    this.arrTareasHechas = [];
    this.arrTareasPendientes = [];
  }

  onTareaCreada($event) {

    if ($event.terminadatarea === "si") {
      this.arrTareasHechas.push($event);
    } else {
      this.arrTareasPendientes.push($event);
    }

  }

}
