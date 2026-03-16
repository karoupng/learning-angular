import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topo } from './components/topo/topo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Topo],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  protected readonly title = signal('di-simples');
}
