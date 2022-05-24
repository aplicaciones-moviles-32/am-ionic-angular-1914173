import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BdServiceService } from '../bd-service.service';

import { popoverController } from '@ionic/core';
import { Popover2Component } from '../popover2/popover2.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private bd: BdServiceService, private popoverController: PopoverController) { }

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
      console.log(res);
     
    })
  }

  detalle: any = {
 
  }

  publicaciones: any=[
  ]
  index: any;

  async mostrarPopover(ev: any) {
    console.log(this.publicacion);
    const popover = await this.popoverController.create({
      component: Popover2Component,
      event: ev,
      translucent: true,
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    this.seleccion(data);
  }

  seleccion(data: any) {
    if (data.respuesta=="eliminar") {
      this.borrarPublicacion();
    }
    if(data=="ocultar"){

    }
    if (data=="editar"){

    }
  }
  borrarPublicacion() {
    this.bd.deletePublicacion(this.publicacion).subscribe((res: any) =>{
    })
  }

}
