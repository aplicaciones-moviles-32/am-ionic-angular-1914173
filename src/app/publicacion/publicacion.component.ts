import { Component, OnInit, OnChanges} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  publicacion = this.ruta.snapshot.params['id'];
  publicacionImprimir: any = {}
  
  ngOnInit(): void {
    this.obtenerPublicacion(this.publicacion);
  }

  publicaciones = [
    {
      "id":"a1",
      "imagen": "assets/imagenes/1.jpg"
    },
    {
      "id":"a2",
      "imagen": "assets/imagenes/3.jpg"
    },
    {
      "id":"b2",
      "imagen": "assets/imagenes/2.jpg"
    },
    {
      "id":"c4",
      "imagen": "assets/imagenes/5.jpg"
    },
    {
      "id":"g1",
      "imagen": "assets/imagenes/6.jpg"
    },
    {
      "id":"g4",
      "imagen": "assets/imagenes/7.jpg"
    }
  ]

  obtenerPublicacion(id: string) : any {
    
    for(let x= 0; x < this.publicaciones.length; x++) {
      if(id == this.publicaciones[x].id) {
        this.publicacionImprimir = this.publicaciones[x];
      }
    }
    console.log(this.publicacionImprimir);
    return this.publicacionImprimir;
  } 
}
