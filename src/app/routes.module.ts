import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FeedComponent} from './feed/feed.component';
import {PerfilComponent} from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';



const routes : Routes=[
  {
    path: '', redirectTo:'welcome', pathMatch:'full'
  },
  {
    path:'welcome', component: WelcomeComponent},
  {
    path:'feed', component: FeedComponent
  },
  {
    path:'perfil', component: PerfilComponent
  },
  {
    path: 'publicacion/:index', component: PublicacionComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }