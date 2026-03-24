import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  // constructor(public usuarioserv: UsuarioService) {} - versão antiga - forma básica sem segurança de dados

  //injeção moderna abaixo com o serviço privado

  private usuarioServ = inject(UsuarioService);

  //criando uma variável pública para o HTML ler

  nomeExibido: string = '';

  ngOnInit(){
    this.nomeExibido = this.usuarioServ.nome;
  }
  mudarNome(){
    this.usuarioServ.alterarNome('Karolaine');
  }



}
