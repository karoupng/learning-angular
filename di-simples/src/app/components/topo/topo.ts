import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-topo',
  imports: [],
  templateUrl: './topo.html',
  styleUrl: './topo.css',
})
//Utilizei baixo acoplamento com uso de injeção: o topo só exige a ferramenta, ele não sabe e não liga para como ela é feita.
export class Topo implements OnInit {
  //implements OnInit: Contrato que declara que usarei a função OnInit
  // constructor(public usuarioserv: UsuarioService) {} - forma antiga de injeção
  nomeNoTopo: string = '';
  private usuarioServ = inject(UsuarioService);

  ngOnInit() {
    //Leitura inicial SÍNCRONA , pega o valor atual presente no serviço
    this.nomeNoTopo = this.usuarioServ.nome;
    //Leitura assíncrona, escuta todas as mudanças futuras
    this.usuarioServ.nomeAtualizado.subscribe((novoNomeRecente) => {
      this.nomeNoTopo = novoNomeRecente;
    });
  }
}
