import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
})
export class ReactFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern('') /* regex */,
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern(''),
    ]),
  });
  alert = false;
  mensaje = 'Formulario enviado';
  constructor() {}
  consolear() {
    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 2000);
  }
  ngOnInit(): void {}
}
