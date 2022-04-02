import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private http: HttpClient, private bd: BdServiceService) { }

  ngOnInit(): void {
    this.bd.getPublicacionesUsuario().subscribe((res: any) => {
      this.publicaciones = res;
    })
  }

  publicaciones: any = [
  ]

  getPublicaciones(): void{
    this.http.get('https://insta-base-64ec2-default-rtdb.firebaseio.com/usuario/publicaciones.json').subscribe(res =>{
      this.publicaciones=res;
    })
  }
}
