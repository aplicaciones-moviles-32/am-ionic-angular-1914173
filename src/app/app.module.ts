import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { TabsComponent } from './tabs/tabs.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

import { environment } from 'src/environments/environment';
import { HttpClientModule} from '@angular/common/http';

import { CintaComponent } from './cinta/cinta.component';
import { PopoverComponent } from './popover/popover.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaContenidoComponent } from './historia-contenido/historia-contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    PublicacionesComponent,
    TabsComponent,
    PublicacionComponent,
    PopoverComponent,
    HistoriasComponent,
    HistoriaContenidoComponent,
    CintaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule { }
