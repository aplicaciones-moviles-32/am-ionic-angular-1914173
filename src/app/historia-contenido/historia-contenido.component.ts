import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-historia-contenido',
  templateUrl: './historia-contenido.component.html',
  styleUrls: ['./historia-contenido.component.css']
})
export class HistoriaContenidoComponent implements OnInit {

  constructor(private bd: BdServiceService, private modalctrl: ModalController) { }
  publicacionImprimir: any ={

  }
  ngOnInit(): void {
    this.bd.getDetalle(1).subscribe((res: any) => {
      this.publicacionImprimir=res;
    })
  }

  async close(){
    await this.modalctrl.dismiss();
  }

}
