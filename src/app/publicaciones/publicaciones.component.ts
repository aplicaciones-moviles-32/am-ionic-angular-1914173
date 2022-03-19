import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      "imagen": "assets/imagenes/4.jpg"
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
}
