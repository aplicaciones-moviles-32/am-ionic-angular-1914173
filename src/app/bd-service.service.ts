import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http: HttpClient) { }
  //GET
  

  getPublicaciones(): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/publicaciones.json')
  }
  getDatosUsuario(): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuario.json')
  }
  getPublicacionesUsuario(): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuario/publicaciones.json')
  }
  getDetalle(index: any): any{
    console.log('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuario/publicaciones/'+index+'.json');
      return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuario/publicaciones/'+index+'.json')
  }
  //POST

  //DELETE

  //PUT
}
