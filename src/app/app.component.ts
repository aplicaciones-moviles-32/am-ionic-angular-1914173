import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ionic-angular-1914173';

  perfil = true;

  togglePerfil(): void {
    this.perfil = !this.perfil;
  }
}
