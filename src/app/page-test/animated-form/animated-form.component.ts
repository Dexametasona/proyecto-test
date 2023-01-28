import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-animated-form',
  templateUrl: './animated-form.component.html',
  styleUrls: ['./animated-form.component.scss']
})
export class AnimatedFormComponent implements OnInit {
  form= new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  alert=false;
  mensaje='Formulario enviado'
  consolear(){
    this.alert=true;

    setTimeout(() => {
      this.alert=false;
    }, 2000); 
  }

  animacionIn(Label:string ){
    let label=document.getElementById(Label) as HTMLLabelElement
    label.classList.add('prueba')
    label.style.opacity='80%';
  }
  animacionOut(Label:string, Input:string){
    let label=document.getElementById(Label) as HTMLLabelElement
    let input=document.getElementById(Input) as HTMLInputElement
    if(input.value=='' || input.value==null){
      label.classList.toggle('prueba')
      label.style.opacity='50%';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
