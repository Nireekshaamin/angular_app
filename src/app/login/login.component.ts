import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  myform: FormGroup | any;
  useremail: FormControl | any;
  password: FormControl | any;


  ngOnInit(): void {
    this.useremail= new FormControl('', [Validators.required]);
    this.password= new FormControl('',[Validators.required, Validators.pattern('[A-Za-z1-9]*'),Validators.minLength(10),Validators.maxLength(20)]);
     this.myform=new FormGroup({
      'useremail':this.useremail,
      'password':this.password,
    })
    
  }
  onSubmit(){
    alert("User registered successfully");
  }

}

