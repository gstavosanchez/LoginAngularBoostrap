import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    nombre:'',
    apellido:'',
    email: '',
    contrasena:''
  }
  public bandera:boolean;
  public respuesta;

  constructor(
    private authServices:AuthService,
    private router:Router
  ) {
    this.respuesta = false;
   }

  ngOnInit(): void {
  }
  singUp(){
    if(this.user.nombre != '' && this.user.apellido != ''&& this.user.email != '' && this.user.contrasena != ''){
        this.authServices.signUp(this.user)
        .subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token',res.token);
            this.router.navigate(['/private']);
          },
          err => {
            console.log(err);
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
