import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http: HttpClient) { }
  //GET
  getPublicaciones(): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuarios.json')
  }
  getDatosUsuario(): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuarios/0.json')
  }
  getPublicacionesUsuario(): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuarios/0/publicaciones.json')
  }
  getDetalle(index: any): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuarios/0/publicaciones/'+index+'.json')
  }
  //PUT
  updatePublicacion(index:any, nuevosDatos:any){
    return this.http.put('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuarios/0/publicaciones/'+index+'.json', nuevosDatos)
  }
  //DELETE
  deletePublicacion(index: any){
    return this.http.delete('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuarios/0/publicaciones/'+ index + '.json')
  }
  //POST
  postPublicacion(post: any) {
    return this.http.post('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuario/0/publicaciones/', post)
  }
}
