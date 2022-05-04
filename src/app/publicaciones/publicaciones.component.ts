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
      const publisRes: any= res;
      const publisArray=Object.keys(res).forEach((key:any)=>{
          console.log(key);
          if(publisRes[key]!=null){
          (this.publicaciones).push(publisRes[key]);
           (this.llaves).push(key);
          }
        })
        
      });
      console.log(this.llaves);
      
  }

  llaves: any=[]
  publicaciones: any = []

  getPublicaciones(): void{
    this.bd.getPublicacionesUsuario().subscribe((res: any) =>{
      this.publicaciones=res;
    })
  }
}
