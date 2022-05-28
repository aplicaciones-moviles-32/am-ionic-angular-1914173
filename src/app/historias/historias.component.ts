import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HistoriaContenidoComponent } from '../historia-contenido/historia-contenido.component';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {

  constructor(private modalctrl: ModalController) { }

  ngOnInit(): void {
  }

  historias: any = [1];
  async mostrarModal() {
    const modal = await this.modalctrl.create({
      component: HistoriaContenidoComponent,
      swipeToClose: true,
      cssClass: 'my-custom-modal',
      animated: true
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
  }
}
