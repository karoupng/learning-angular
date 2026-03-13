import { Injectable } from '@angular/core';

// providedIn: 'root   significa: crie uma única cópia deste serviço e deixe-a disponível na raiz do projeto (root). Dessa forma a informação é compartilhada com todos os componentes.
@Injectable({
  providedIn: 'root',
})
// UsuarioService guarda tudo que diz respeito à pessoa logada no sistema. Estado(dados) e Ações (métodos).. exemplos: dados de segurança e permissão : nivel de acesso, preferências do perfil: cor do tema e idioma, ações: ação de logout, trocar senha..
export class UsuarioService {

  nome: string = 'Karol';
}


