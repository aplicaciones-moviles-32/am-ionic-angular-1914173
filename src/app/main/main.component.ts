import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private bd : BdServiceService, private router: Router) { }
  ngOnInit(): void {
    //this.login();
    this.datos=new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  ACTIVE: boolean = false;
  $ACTIVE: boolean = true;


  datos: any={
    user:"",
    password:""
  }


  login(){
      this.ACTIVE=true;
      this.$ACTIVE=false;
      console.log(this.ACTIVE);
  }

  loginfo: any=[];
  getStatus(){
    this.bd.getStatus().subscribe((res: any) => {
      this.loginfo=res;
    });
  }
  try(){

  }

 
}
