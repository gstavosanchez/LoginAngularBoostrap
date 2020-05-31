import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

export interface IUser  {
  idUsuario:string,
  nombre:string,
  apellido:string,
  email:string,
  contrasena:string,
  fecha_Creacion:string

}
@Component({
  selector: 'app-private-user',
  templateUrl: './private-user.component.html',
  styleUrls: ['./private-user.component.css']
})
export class PrivateUserComponent implements OnInit {

  users:any = []
  //filter = new FormControl('');
  filterPost = '';
  public bandera:boolean;
  public respuesta;
  constructor(
    private userService:UserService,
    
  ) {
    this.bandera = false;
   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
    this.userService.getUser()
      .subscribe(
        res =>{
          //console.log(res);
          this.users = res as IUser;
          console.log(this.users);

        }
      );
  }

  deleteUser(id:string){
    this.userService.deleteuser(id)
      .subscribe(
        res =>{
          this.getUsers();
          console.log(res);
          this.bandera= true;
          this.respuesta = res.message;
        },
        err => {
          console.log(err);
          
        }
      );
  }
  




}
