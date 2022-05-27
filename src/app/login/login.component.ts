import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BdServiceService } from '../bd-service.service';
import { MainComponent } from '../main/main.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bd: BdServiceService, private router: Router) { }
  
  datos: any={
      user:"",
      password:""
    }

  
  ngOnInit(): void {
    this.datos=new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  redirect(){
    //MainComponent.login();
    this.router.navigate(['/welcome']);
  }
  

  
}
