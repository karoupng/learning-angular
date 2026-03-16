import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-topo',
  imports: [],
  templateUrl: './topo.html',
  styleUrl: './topo.css',
})
export class Topo {
  constructor(public usuarioserv: UsuarioService){}
}
