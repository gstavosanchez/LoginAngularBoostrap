import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http'
import { AuthService } from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private URL  = "http://localhost:4000/api";
  private headers:HttpHeaders;
  constructor(
    private http:HttpClient,
    private authService:AuthService
  ) {
    
  }

  getHeader():HttpHeaders{
    this.headers = new HttpHeaders({
      'Content-Type':'application/json',
      'token': this.authService.getToken()
    })
    return this.headers
  }
  
  getUser(){
    this.getHeader();
    return this.http.get<any>(this.URL +'/user',{headers:this.headers});
  }
  deleteuser(id:string){
    this.getHeader();
    return this.http.delete<any>(`${this.URL}/user/${id}`,{headers:this.headers});
  }
}
