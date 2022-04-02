import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private http: HttpClient, private bd: BdServiceService) { }

  ngOnInit(): void {
    this.bd.getDatosUsuario().subscribe((res: any) => {
      this.usuario = res;
    })
  }

  usuario: any = {
    
  }

  editando = false;

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarNuevaBio(): void {
    this.usuario.descripcion = this.bio;
    this.toggleEditar();
  }  
  
  getDatosUsuario(): void{
    this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuario.json').subscribe(res =>{
      this.usuario=res;
    })
  }
}
