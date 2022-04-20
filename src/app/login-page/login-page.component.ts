import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  //TODO FormGroup Hace referencia a crear un Grupo de Campos
  // miFormularioLogin = new FormGroup({});

  // constructor() {}

  // ngOnInit(): void {
  //   //TODO El primer ciclo de vida que se ejecuta

  //   this.miFormularioLogin = new FormGroup({
  //     email: new FormControl('',[
  //       Validators.required,
  //       Validators.email
  //     ]),
  //     password: new FormControl('',
  //     [
  //       Validators.required,
  //       Validators.minLength(5),
  //       Validators.maxLength(12)
  //     ]),
  //   });
  // }

  // getStatusValidEmail():boolean | undefined{
  //   const email = this.miFormularioLogin.get('email')?.valid;
  //   return email
  // }

  // getStatusValidEmailError():any{
  //   const emailErros = this.miFormularioLogin.get('email')?.errors;
  //   return emailErros ? 'Email no es valido' :  null
  // }

  // enviarCredenciales():void{
  //   const datos = this.miFormularioLogin.value;
  //   console.log(datos)
  // }

  // simularHttp(): void {
  //   const data = {
  //     email: 'hola@hola.com',
  //   };

  //   this.miFormularioLogin.setValue(data)
  //   this.miFormularioLogin.patchValue(data)
  // }

  public formParent = new FormGroup({}); //TODO: Declaramos el Form

  //TODO: Ciclo de vida
  ngOnInit(): void {
    this.initFormParent();
    this.loadData();
  }

  //TODO: FormGroup -> [FormArray, FormControls, FormGroup]
  initFormParent(): void {
    this.formParent = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      skills: new FormArray([], [
        Validators.required,
        Validators.maxLength(5)
      ]),
    });
  }

  loadData(): void {
    const data = {
      name: 'Leifer',
      skills: [
        {
          language: 'Angular',
          projectUrl: 'https://github.com',
          expYear: '4',
        },
        {
          language: 'Node',
          projectUrl: '',
          expYear: '2',
        },
      ],
    };

    for (const _ of data.skills) {
      this.addSkill();
    }

    this.formParent.patchValue(data);
  }

  initFormSkill(): FormGroup {
    return new FormGroup({
      language: new FormControl('', [Validators.required]),
      projectUrl: new FormControl(''),
      expYear: new FormControl('', [Validators.required]),
    });
  }

  //TODO: Agregar nuevo skill en form 🤨
  addSkill(): void {
    const refSkills = this.formParent.get('skills') as FormArray;
    refSkills.push(this.initFormSkill());
  }

  /**
   *
   */

  //TODO: Obtener referencia a un formControl

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key);
  }

  //TODO: Quitar validaciones 1,2,3,4 (language)
  removeValidation(index: number, key: string): void {
    const refParent = this.formParent.get('skills') as FormArray;
    const refSingle = refParent.at(index).get(key) as FormGroup;

    refSingle.clearValidators();
    refSingle.updateValueAndValidity();
  }

  //TODO: Agregar validaciones
  addValidation(index: number, key: string): void {
    const refParent = this.formParent.get('skills') as FormArray;
    const refSingle = refParent.at(index).get(key) as FormGroup;

    refSingle.setValidators([
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]);
    refSingle.updateValueAndValidity();
  }

  //TODO: Cargar data de ejemplo
}
