import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user = {
    email: '',
    contrasena:''
  }
  public bandera:boolean;
  public respuesta;
  constructor(
    private authServices:AuthService,
    private router:Router
  ) { 
    this.bandera = false;
  }

  ngOnInit(): void {
  }

  signIn(){
    if(this.user.email != '' && this.user.contrasena != ''){
      this.authServices.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token);
          this.router.navigate(['/private']);
        },
        err => {
          console.log(err)
          this.bandera = true;
          this.respuesta = err.error;
        }
      );
    }else{
      this.bandera = true;
      this.respuesta = 'Campos Vacios';
    }
    
  }




}
