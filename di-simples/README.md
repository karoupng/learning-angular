# Arquitetura Publisher-Subscriber no Angular


Abaixo está o mapeamento exato do fluxo de dados, dividido em 6 etapas arquiteturais:

### 1. Bootstrap (Inicialização)
O Angular prepara o terreno antes da interface gráfica ser montada.
* **Localização:** `usuario.service.ts`
* **Ação:** A instrução `providedIn: 'root'` garante que o serviço seja instanciado como um **Singleton** (uma cópia única compartilhada por toda a aplicação).

### 2. Subscription (Inscrição)
O componente ouvinte "assina" o canal de comunicação para receber atualizações futuras.
* **Localização:** `topo.ts` (dentro do `ngOnInit`)
* **Ação:** O componente Topo entrega uma instrução de *callback* através do comando `this.usuarioServ.nomeAtualizado.subscribe(novoNomeQueChegou => ...)`. É uma ordem agendada: "Ao surgirem novidades, rode a função dentro das chaves".

### 3. Trigger (Gatilho)
O usuário interage com a interface, iniciando a reação em cadeia.
* **Localização:** `perfil.html` e `perfil.ts`
* **Ação:** O usuário clica no botão, acionando a função `mudarNome()`. O componente Perfil percebe a ação e envia a nova *string* ('Karolaine') em direção ao serviço.

### 4. Emission (Emissão)
O Serviço recebe o novo dado e o injeta no canal de transmissão.
* **Localização:** `usuario.service.ts` (dentro da função `alterarNome`)
* **Ação:** O método `.next(novoNome)` é acionado. Ele pega a *string* 'Karolaine' que chegou do perfil e a empurra com força para dentro do nosso observável (`nomeAtualizado`).

### 5. Broadcast (Transmissão)
A distribuição da informação ocorre nos bastidores de forma reativa.
* **Localização:** Motor interno do `Subject` (RxJS).
* **Ação:** O `Subject` transmite o novo dado simultaneamente para todos os componentes que registraram interesse (que estão na sua "lista" de inscritos do Passo 2).

### 6. Change Detection (Detecção de Mudança)
O ciclo se fecha com a atualização visual na tela do usuário.
* **Localização:** `topo.ts` e `topo.html`
* **Ação:** O *subscribe* é ativado, executando `this.nomeNoTopo = novoNomeQueChegou;`. A variável muda na memória, o Angular percebe a alteração instantaneamente e atualiza o HTML (`{{ nomeNoTopo }}`).