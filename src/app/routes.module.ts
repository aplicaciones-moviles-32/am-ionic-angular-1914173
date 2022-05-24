import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FeedComponent} from './feed/feed.component';
import {PerfilComponent} from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';

const routes : Routes=[
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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }