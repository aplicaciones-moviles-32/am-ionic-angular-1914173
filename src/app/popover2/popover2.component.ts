import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover2',
  templateUrl: './popover2.component.html',
  styleUrls: ['./popover2.component.css']
})
export class Popover2Component implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit(): void {
  }
  eliminar(){
    this.popoverController.dismiss({
      "respuesta":"eliminar"
    })
  }

  ocultar(){
    this.popoverController.dismiss({
      "respuesta":"ocultar"
    })
  }

  editar(){
    this.popoverController.dismiss({
      "respuesta":"editar"
    })
  }
}
