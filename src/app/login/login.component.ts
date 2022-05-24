import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bd: BdServiceService) { }
  
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

  login(){
  
  }

  
}
