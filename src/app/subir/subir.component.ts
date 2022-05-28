import { Component, OnInit } from '@angular/core';
import { CamaraService } from '../camara.service';
import { BdServiceService } from '../bd-service.service';


@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent implements OnInit {

  constructor(private CamaraService: CamaraService, private bd: BdServiceService  ) { }

  ngOnInit(): void {
    
  }

  tomarFoto(){
    this.CamaraService.addNewToGallery();
  }
}
