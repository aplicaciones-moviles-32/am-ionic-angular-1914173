import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private http: HttpClient, private bd: BdServiceService ) { }

  ngOnInit(): void {
    this.bd.getPublicaciones().subscribe((res: any) => {
      this.perrillos=res;
    });
  }

  getPublicaciones(): any {
    
  }
  perrillos: any = [
  ];
}
