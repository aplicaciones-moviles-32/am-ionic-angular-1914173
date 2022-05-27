import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';

import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private http: HttpClient, private bd: BdServiceService, private popoverController: PopoverController ) { }

  ngOnInit(): void {
    this.bd.getPublicaciones().subscribe((res: any) => {
      for (let index = 0; index < res.length; index++) {
        if(res[index].nombre!=this.usuario) {
          for (let i = 0; i < res[index].publicaciones.length; i++) {
            this.posts.push(res[index].publicaciones[i]);
          }
        } 
      }
    });
    console.log(this.posts);
  }

  getPublicaciones(): any {
  }

  usuarios: any=[];
  usuario: any="Gizmo";
  buffer:any =[];
  posts: any = [];

  async mostrarPopover(ev: any, id:any) {
    console.log(id);
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,

    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
  }
  
}
