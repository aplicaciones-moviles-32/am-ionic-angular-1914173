import { Component } from '@angular/core';
import { BdServiceService } from './bd-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  login:boolean=true;
  $login: boolean=false;
  ngOnInit(): void {
  }
}
