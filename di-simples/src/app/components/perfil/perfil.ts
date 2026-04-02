import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-perfil',
  imports: [ReactiveFormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  // constructor(public usuarioserv: UsuarioService) {} - versão antiga - forma básica sem segurança de dados

  //injeção moderna abaixo com o serviço privado

  private usuarioServ = inject(UsuarioService);

  //criando uma variável pública para o HTML ler

  nomeExibido: string = '';

  //Criação do vigia do campo de texto
  nomeInput = new FormControl('');

  ngOnInit() {
    this.nomeExibido = this.usuarioServ.nome;
  }
  mudarNome() {
    //Em vez de escrever o nome Manualmente, pegamos o value dentro do vigia
    const novoValor = this.nomeInput.value;

    try {
      if (novoValor) {
        this.usuarioServ.alterarNome(novoValor);
      }
    } catch (error: any) {
      console.error('Falha ao atualizar:', error.message);
      alert('Erro ao mudar nome:' + error.message);
    }
  }
}
