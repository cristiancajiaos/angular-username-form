import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public myForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public isFieldInvalid(): boolean {
    return this.myForm.controls['username'].invalid;
  }

  public requiredError(): boolean {
    let control = this.myForm.controls['username'];
    return control.touched && control.errors['required'];
  }

  public ngOnSubmit(): void {
    console.log(this.myForm.value);
  }
}
