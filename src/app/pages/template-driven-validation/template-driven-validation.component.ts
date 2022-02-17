import { Component, OnInit } from '@angular/core';
import { RegistrationDtls } from 'src/app/model/RegistrationDtls';

@Component({
  selector: 'app-template-driven-validation',
  templateUrl: './template-driven-validation.component.html',
  styleUrls: ['./template-driven-validation.component.css']
})
export class TemplateDrivenValidationComponent implements OnInit {

  regDtls: RegistrationDtls = new RegistrationDtls();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regDtls);
  }

}
