import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }

  loginUrl="http://localhost:9000/user/login";

  

  generateToken(credentials:User){
    console.log("credentials",credentials);
    
    return this.http.post(this.loginUrl,credentials)
  
  }

  forgot(data:any)
  {
    console.log(data)
    return this.http.post("http://localhost:9000/register/forgot-password",data);
  }

  otp(email:any)
 
  {
      return this.http.get("http://localhost:8077/getotp/"+email)
  }

  // for login user
  loginUser(token:any, email: any,role:any){
    localStorage.setItem("token",token);
    localStorage.setItem("email", email);
    localStorage.setItem("role",role)
    this.router.navigateByUrl("");
    return true;
  }

  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  // to log out user
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    
    return  true;
  }

  // to get token
  getToken(){
    return localStorage.getItem('token');
  }

}
