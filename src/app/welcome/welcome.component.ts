import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  public innerHeight: any;
  public altura: any;
  public r = document.querySelector(':root');
  ngOnInit() {
      this.innerHeight = window.innerHeight;
      this.altura =  this.innerHeight-30;
      console.log(this.altura);
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
