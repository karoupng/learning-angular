import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topo } from './components/topo/topo';
import { Perfil } from './components/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topo, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('di-simples');
}
