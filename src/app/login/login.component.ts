import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'signup';
  // first:boolean=true;
  // second:boolean=false;
  // third:boolean=false;
  // fourth:boolean=false;

  onOtpChange(event:any){
  }
  // step1()
  // {
  //   this.second=true
  //   this.first=false
  // }

  // step2()
  // {
  //   this.second=false
  //   this.third=true
  // }
  // step3()
  // {
  //   this.third=false
  //   this.fourth=true
  // }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
 
  isLinear = true
  constructor(private _formBuilder: FormBuilder) {}
}
