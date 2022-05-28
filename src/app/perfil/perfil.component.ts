import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private http: HttpClient, private bd: BdServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.bd.getDatosUsuario().subscribe((res: any) => {
      this.usuario = res;
    })
  }

  login(){
    console.log(this.loginfo);
    if(this.loginfo.active==1){
      this.bd.getDatosUsuario().subscribe((res: any) => {
        this.usuario = res;
      })
    }
    else{
      //this.router.navigate(['/']);
    }
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


  loginfo: any=[];
  getStatus(){
    this.bd.getStatus().subscribe((res: any) => {
      this.loginfo=res;
    });
  }
}
