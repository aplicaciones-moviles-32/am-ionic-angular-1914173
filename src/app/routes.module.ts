import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FeedComponent} from './feed/feed.component';
import {PerfilComponent} from './perfil/perfil.component';
//import {FeedComponent} from './feed/feed.component';
const routes : Routes=[
  {
    path:'feed', component: FeedComponent
  },
  {
    path:'perfil', component: PerfilComponent
  },
  {
  path:'', redirectTo: '/perfil', pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }