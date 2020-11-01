import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../Tarea';

@Component({
  selector: 'componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {

  @Input() listaTareasHechas: Tarea[];
  @Input() listaTareasPendientes: Tarea[];


  constructor() { }


  ngOnInit(): void {
  }

}
