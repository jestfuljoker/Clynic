# Clynic 💉

<p align="center">
  <img  alt="Clynic Logo" src="./front-end/src/assets/logo.svg"></img>
</p>

<h4 align="center"> 
	🚧 Clynic 🚀 Em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Chriszao/Clynic?color=%2304D361" />

  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/progress-80%25-brightgreen.svg" alt="Progress">
  </a>
	
  <a href="https://github.com/Chriszao/Clynic/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Chriszao/Clynic">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<!-- <img src="exemplo-image.png" alt="exemplo imagem">

> Linha adicional de texto informativo sobre o que o projeto faz. Sua introdução deve ter cerca de 2 ou 3 linhas. Não exagere, as pessoas não vão ler. -->

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

#### Back-end:
- [x] Recuperação de senha
     - [x] Recuperar senha através do email cadastrado;
     - [x] Email de recuperação de senha;
     - [x] Reset de senha;
     - [x] Testes de recuperação de senha.
     
- [x] Atualização do perfil
     - [x] Alterar nome, email, senha;

- [x] Painel do prestador
     - [x] Listar agendamentos de um dia específico;
     - [x] Notificação quando houver um novo agendamento;
     - [x] Visualização de notificações lidas e não lidas.

- [x] Agendamento de serviços
     - [x] Listar todos prestadores de serviços cadastrados;
     - [x] Listar os dias de um mês com pelo menos um horário disponível de um prestador;
     - [x] Listar horários disponíveis em um dia especifico de um prestador;
     - [x] Realizar um novo agendamento com um prestador.

- [x] Login e autenticação de usuário;
  - [x] Criar token de autenticação de sessão;
  - [x] Criar Hash para senhas;

- [x] Criar tratativas de erros da aplicação.

---
#### Front-end:

- [X] Estrutura das Páginas de Login e Cadastro;
    - [X] Validar cadastro;
    - [X] Validação de login;

- [X] Autenticação;
    - [X] Login pelo contexto;
    - [X] Exibir erros no input
    - [X] Manter Usuário no storage;

- [X] Mensagens de toast;
    - [X] Estrutura de Toast;
    - [X] Adicionar e remover toasts;

- [X] Rotas da Aplicação;
    - [X] Configurar Rotas;
    - [X] Autenticar Rotas;

- [X] Dashboard;
    - [X] Próximo agendamento;
    - [X] Listagem de agendamentos
    - [X] Exibindo agendamentos em tela

- [X] Perfil do usuário;
    - [X] Página de perfil;
    - [X] Trocar de avatar;
    - [X] Alteração de dados;
---
### 🛠️ Tecnologias

### Back-end:
- [Typescript](https://www.typescriptlang.org/docs/);
- [Node.js](https://nodejs.org/en/);
- [TypeORM](https://typeorm.io/#/);
- [Express](https://expressjs.com/pt-br/starter/installing.html);
- [Postgres](https://www.postgresql.org/docs/);
- [Docker](https://docs.docker.com/get-started/);
- [Insomnia](https://support.insomnia.rest/category/149-getting-started);
- [Jest](https://jestjs.io/docs/getting-started).

### Front-end:
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML);
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS);
- [Typescript](https://www.typescriptlang.org/docs/);
- [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html).
---
## 🚀 Rodando Clynic

Para instalar o Clynic, siga estas etapas:

```
$ git clone
$ yarn
$ yarn start (para o front-end)
$ yarn dev:server (para o back-end)
```
<!-- 
## ☕ Usando <nome_do_projeto>

Para usar <nome_do_projeto>, siga estas etapas:

```
<exemplo_de_uso>
``` -->
<!-- 
Adicione comandos de execução e exemplos que você acha que os usuários acharão úteis. Fornece uma referência de opções para pontos de bônus! -->

## 📫 Contribuindo para Clynic
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com <strong>Clynic</strong>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Chriszao">
        <img src="https://avatars3.githubusercontent.com/Chriszao" width="100px;" alt="Foto do Christofer Assis no GitHub"/><br>
        <sub>
          <b>Christofer Assis</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mahcassi">
        <img src="https://avatars.githubusercontent.com/u/72576725?v=4" width="100px;" alt="Foto de Maria Eduarda Cassiano"/><br>
        <sub>
          <b>Maria Eduarda</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Projeto feito para disciplina de <strong> 📕 Projeto Orientado a Objetos 📗 </strong> curso <strong> Analise e desenvolvimento de sistemas</strong> - <strong> UMC </strong></p>


[⬆ Voltar ao topo](#Clynic)<br>
