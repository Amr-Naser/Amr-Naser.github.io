import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err:string;

  constructor(public _AuthService:AuthService , public _Router:Router) {}

  signInForm :FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required , Validators.email]),
    'password':new FormControl(null,[Validators.required , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
  })

  ngOnInit(): void {
  }
  getFormData(formData){
    this._AuthService.signIn(formData.value).subscribe(data=>{
      if(data.message == 'success')
    {
      console.log(data)
      this._AuthService.saveUserData(data.user , data.token);
       this._Router.navigate(['/home'])
    }
    else 
    {
      this.err = 'email or username is wrong';
    }
    })
    
  }

}
