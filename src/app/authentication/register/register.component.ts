import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  disabled = ""
  email="";
  password="";
  message = '';
  errorMessage = ''; // validation error handle
  _error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle


  constructor(private authservice: AuthService, private router:Router,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username : ['spruko@admin.com',[Validators.required, Validators.email]],
      password : ['sprukoadmin', Validators.required]
    });
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  register()
  {
    this.disabled = "btn-loading"
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "you are register with data on firbase"
          this.router.navigate(['/dashboard/sales'])
        }).catch((_error:any) => {
          this.error = _error
          this.router.navigate(['/'])
        })
    }
  }

  validateForm(email:string, password:string)
  {
    if(email.length === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
  public registrationForm! : FormGroup;
  public error:any = '';

  get form(){
    return this.registrationForm.controls;
  }
  Submit(){
    this.disabled = "btn-loading"
    if (this.registrationForm.controls['username'].value === "spruko@admin.com" && this.registrationForm.controls['password'].value === "sprukoadmin" )
    {
      this.router.navigate(['/dashboard/sales']);
    }
    else{
      this.error = "Please check email and passowrd"
    }
  }
}
