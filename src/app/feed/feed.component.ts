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

  constructor(private http: HttpClient, private bd: BdServiceService, private popover: PopoverController ) { }

  ngOnInit(): void {
    this.bd.getPublicaciones().subscribe((res: any) => {
      this.posts=res;
    });
  }

  getPublicaciones(): any {
    
  }
  posts: any = [
  ];
}
