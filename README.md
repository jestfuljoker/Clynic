# Clynic 💉

![GitHub repo size](https://img.shields.io/github/repo-size/Chriszao/Clynic?style=for-the-badge) ![GitHub language count](https://img.shields.io/github/languages/count/Chriszao/Clynic?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Chriszao/Clynic?style=for-the-badge)

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

- [ ] Painel do prestador
     - [ ] Listar agendamentos de um dia específico;
     - [ ] Notificação quando houver um novo agendamento;
     - [ ] Visualização de notificações lidas e não lidas.

- [ ] Agendamento de serviços
     - [ ] Listar todos prestadores de serviços cadastrados;
     - [ ] Listar os dias de um mês com pelo menos um horário disponível de um prestador;
     - [ ] Listar horários disponíveis em um dia especifico de um prestador;
     - [ ] Realizar um novo agendamento com um prestador.

- [x] Login e autenticação de usuário;
  - [x] Criar token de autenticação de sessão;
  - [x] Criar Hash para senhas;

- [x] Criar tratativas de erros da aplicação.

---
#### Front-end:

- [X] Estrutura das Páginas de Login e Cadastro;
    - [ ] Validar cadastro;
    - [ ] Exibir erros no input;
    - [ ] Criar tooltip de erros;
    - [ ] Validação de login;

- [ ] Autenticação;
    - [ ] Habilar Cors na API;
    - [ ] Login pelo contexto;
    - [ ] Manter Usuário no storage;

- [ ] Mensagens de toast;
    - [ ] Estrutura de Toast;
    - [ ] Criar hook de toast;
    - [ ] Adicionar e remover toasts;
    - [ ] Animar Toasts;

- [ ] Rotas da Aplicação;
    - [ ] Configurar Rotas;
    - [ ] Autenticar Rotas;
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
