import { Component } from '@angular/core';
import { Validator } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css'
})
export class IniciarsesionComponent {
  form: any;
  get Password()
  {
  return this.form.get("password");
  }
  get Mail()
  {
  return this.form.get("mail");
  }
  onEnviar(event: Event)
{
  event.preventDefault;
  if (this.form.valid)
  {
  alert ("Enviar al servidor...")
  }
  else
  {
    this.form.markAllAsTouched();
}
}
  constructor(private fromBuilder: FormBuilder){
    this.form=this.fromBuilder.group(
      {
        password:['',Validators.required, Validators.minLength(8)],
        mail:['',Validators.required, Validators.email]
      }
    )
  }
}
