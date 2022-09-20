import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  myform: FormGroup | any;
  name: FormControl | any;
  useremail: FormControl | any;
  password: FormControl | any;
  mobile: FormControl | any;


  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'),Validators.minLength(6),Validators.maxLength(16)]);
    this.useremail= new FormControl('', [Validators.required]);
    this.password= new FormControl('',[Validators.required, Validators.pattern('[A-Za-z1-9]*'),Validators.minLength(10),Validators.maxLength(20)]);
    this.mobile=new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]);
    this.myform=new FormGroup({
      'name':this.name,
      'useremail':this.useremail,
      'password':this.password,
      'mobile':this.mobile
    })
    
  }
  onSubmit(){
    alert("User registered successfully");
  }

}
