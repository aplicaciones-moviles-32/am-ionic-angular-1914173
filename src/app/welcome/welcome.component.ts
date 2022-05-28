import { Component, HostListener, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private bd: BdServiceService) { }
  public innerHeight: any;
  public altura: any;
  public r = document.querySelector(':root');

  usuario:any ="Gizmo";
  
  ngOnInit() {
      this.innerHeight = window.innerHeight;
      this.altura =  this.innerHeight-30;
      console.log(this.altura);
      
      this.bd.getPublicaciones().subscribe((res: any) => {
        for (let index = 0; index < res.length; index++) {
          if(res[index].nombre!=this.usuario) {
            const x=Object.keys(res[index].publiaciones)
            console.log(x);
          } 
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.innerHeight = window.innerHeight;
  this.altura =  this.innerHeight-30;
  //console.log(this.altura);
  //var test = document.querySelector('test');
  //document.documentElement.style.setProperty('--altura', this.altura);
  }
  


}
