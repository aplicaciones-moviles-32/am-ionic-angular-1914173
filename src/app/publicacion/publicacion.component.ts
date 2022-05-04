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

  publicacion: string = this.ruta.snapshot.params['index'];
  publicacionImprimir: any = {}
  
  ngOnChanges(): void{
    
  }
  ngOnInit(): void {
     //this.obtenerPublicacion();
    //this.publicacionImprimir=this.detalle;
    //publicacionImprimir=this.bd.getDetalle(this.publicacion);
    this.bd.getDetalle(this.publicacion).subscribe((res: any) =>{
      this.publicacionImprimir=res;
      console.log(this.publicacion);
      this.load=true;
    })
  }

  detalle: any = {
 
  }

  publicaciones: any=[
  ]

  
  index: any;

}
