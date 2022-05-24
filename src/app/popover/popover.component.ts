import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { popoverController } from '@ionic/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit(): void {
  }

  bloquear(){
    this.popoverController.dismiss({
      "respuesta":"bloquear"
    })
  }

  ocultar(){
    this.popoverController.dismiss({
      "respuesta":"ocultar"
    })
  }

  reportar(){
    this.popoverController.dismiss({
      "respuesta":"reportar"
    })
  }

}
