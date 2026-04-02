import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

// providedIn: 'root   significa: crie uma única cópia deste serviço e deixe-a disponível na raiz do projeto (root). Dessa forma a informação é compartilhada com todos os componentes.
@Injectable({
  providedIn: 'root',
})
// UsuarioService guarda tudo que diz respeito à pessoa logada no sistema. Estado(dados) e Ações (métodos).. exemplos: dados de segurança e permissão : nivel de acesso, preferências do perfil: cor do tema e idioma, ações: ação de logout, trocar senha..
export class UsuarioService {
  nome: string = 'Karol';

  nomeAtualizado = new Subject<string>();

  alterarNome(novoNome: string) {
    if (novoNome.toLocaleLowerCase() === 'admin'){
      //Lançamento de erro manual
      throw new Error('O nome "Admin" é reservado pelo sistema!');
    }
    this.nome = novoNome;

    this.nomeAtualizado.next(novoNome);
  }
}
