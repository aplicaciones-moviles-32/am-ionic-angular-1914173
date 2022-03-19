import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    "nombre": "Gizmo",
    "usuario":"@gizmo",
    "descripcion": "Hello World",
    "followers": 52642,
    "following": 203,
    "posts": 123,
    "fotodeperfil": "assets/imagenes/2.jpg"
  }

  editando = false;

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarNuevaBio(): void {
    this.usuario.descripcion = this.bio;
    this.toggleEditar;
  }    
}
