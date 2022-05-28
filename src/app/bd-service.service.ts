import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';
@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http: HttpClient) { }
  //GET
  getPublicaciones(): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/publicaciones.json')
  }
  getPublicacionDetalle(index: any): any{
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/publicaciones/'+index+'.json')
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

  //WORK IN PROGRESS
  //login thing
  getStatus(){
    return this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/logins/0.json')
  }
  //CAMBIO EN PUBLIS
  publiChanges = new EventEmitter();
  subsVar = Subscription;
  cargarPublis(){
    this.publiChanges.emit();
  }


}
