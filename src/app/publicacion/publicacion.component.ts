import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BdServiceService } from '../bd-service.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  load: boolean= true;
  constructor(private ruta: ActivatedRoute, private bd: BdServiceService) { }

  publicacion = this.ruta.snapshot.params['id'];
  publicacionImprimir: any = {}
  
  ngOnChanges(): void{
    
  }
  ngOnInit(): void {
      this.obtenerPublicacion();
    //this.publicacionImprimir=this.detalle;
  }

  detalle: any = {
 
  }

  publicaciones: any=[
  ]

  
  index: any;
  obtenerPublicacion() : any {
    this.bd.getPublicacionesUsuario().subscribe((res: any) => {
      this.publicaciones = res;
      console.log(this.publicaciones);
      this.buscarPubli(this.publicacion);
    })
  }
  buscarPubli(s: string) : any {
    let conta: number =0;
    for(var i of this.publicaciones){
      console.log(s);
      console.log(i.id);
      if(s == i.id) {
        this.index = conta;
        console.log('checked');
        console.log(this.index);
      }
      conta++;
    }
    console.log(this.index);
    this.bd.getDetalle(this.index).subscribe((res: any) =>{
      this.publicacionImprimir=res;
      console.log(res);
      this.load=true;
    })
    console.log('going through');
    console.log(this.publicacionImprimir); 
  }

}
