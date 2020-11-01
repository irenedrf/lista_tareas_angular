import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarea } from '../Tarea';

@Component({
  selector: 'componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})

export class ComponenteUnoComponent implements OnInit {

  @Output() tareaemitida: EventEmitter<Tarea>;

  form: FormGroup;

  constructor() {

    this.tareaemitida = new EventEmitter();

    this.form = new FormGroup({

      nombretarea: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      urgenciatarea: new FormControl('', [
        Validators.required
      ]),
      terminadatarea: new FormControl('', [
        this.terminadaValidator
      ]),

    });
  }

  ngOnInit(): void {
  }

  onSubmitSend() {
    console.log(this.form.value);
    this.tareaemitida.emit(this.form.value);
  }


  terminadaValidator(control: FormControl) {
    let respuesta = control.value;
    respuesta = respuesta.toLowerCase();
    if (respuesta === 'si' || respuesta === 'no') {
      return null;
    } else {
      return { terminadavalidator: 'Respuesta no válida. Responda "si" o "no".' }
    }
  }

}
