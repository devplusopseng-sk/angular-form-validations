import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationDtls } from 'src/app/model/RegistrationDtls';

@Component({
  selector: 'app-form-control-validation',
  templateUrl: './form-control-validation.component.html',
  styleUrls: ['./form-control-validation.component.css']
})
export class FormControlValidationComponent implements OnInit {

  regDtls: RegistrationDtls = new RegistrationDtls();
  regForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.regForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        fName: [
          '',
          [
            Validators.required,
            Validators.pattern("[A-Za-z]+$")
          ]
        ],
        lName: [
          '',
          [
            Validators.required,
            Validators.pattern("[A-Za-z]+$")
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        mobile: [
          '',
          [
            Validators.required,
            Validators.pattern("[6-9]\\d{9}$")
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
          ]
        ]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.regForm.controls;
  }

  onSubmit() {
    this.regDtls = this.regForm.value;
    console.log(this.regDtls);
  }

}
