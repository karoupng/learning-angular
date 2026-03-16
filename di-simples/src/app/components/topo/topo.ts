import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-topo',
  imports: [],
  templateUrl: './topo.html',
  styleUrl: './topo.css',
})
//Utilizei baixo acoplamento com uso de injeção: o topo só exige a ferramenta, ele não sabe e não liga para como ela é feita.
export class Topo {
  constructor(public usuarioserv: UsuarioService) {}
}
