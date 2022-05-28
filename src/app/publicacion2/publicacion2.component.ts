import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';

import { popoverController } from '@ionic/core';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { PublicacionesComponent } from '../publicaciones/publicaciones.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-publicacion2',
  templateUrl: './publicacion2.component.html',
  styleUrls: ['./publicacion2.component.css']
})
export class Publicacion2Component implements OnInit {

  constructor(private ruta: ActivatedRoute, private bd: BdServiceService, private popoverController: PopoverController, 
    private router: Router) { }

  publicacion: string = this.ruta.snapshot.params['index'];
  publicacionImprimir: any = {}
  
  usuario: any="Gizmo";
  buffer:any =[];
  posts: any = [];

  ngOnInit(): void {
    this.bd.getPublicacionDetalle(this.publicacion).subscribe((res: any) => {
      this.publicacionImprimir=res;
    });
  }


  seleccion(data: any) {
    if (data.respuesta=="eliminar") {
      //this.borrarPublicacion();
    }
    if(data=="ocultar"){

    }
    if (data=="editar"){

    }
  }
  async mostrarPopover(ev: any) {
    console.log(this.publicacion);
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    this.seleccion(data);
  }

  

}
