# Plano de Implantacao - PortfolioHUB Pedro Henrique

## 1. Planejamento da implantacao

O PortfolioHUB foi planejado como uma plataforma simples, responsiva e centralizada para apresentar os projetos digitais de Pedro Henrique. A stack escolhida foi React com Vite, pois permite desenvolvimento rapido, build leve e publicacao simples no GitHub Pages.

O apoio de IA foi usado como guia para organizar requisitos, estruturar a interface, revisar textos, criar documentacao e conferir boas praticas de seguranca.

## 2. Configuracao inicial e integracao com GitHub

O projeto usa o perfil `12pedro1021-droid` como origem publica dos dados. A aplicacao consome a API:

```text
https://api.github.com/users/12pedro1021-droid/repos?sort=updated&per_page=8
```

Com isso, os repositorios aparecem automaticamente no portifolio sem precisar editar o codigo sempre que um novo projeto for publicado.

## 3. Gestao de usuarios e seguranca

Para controle de acesso, a branch principal deve receber alteracoes apenas por Pull Request. A recomendacao de configuracao no GitHub e:

- Exigir Pull Request antes de merge.
- Exigir revisao antes de aprovar mudancas.
- Bloquear push direto na branch `main`.
- Manter dependencias atualizadas.
- Evitar expor chaves, tokens e informacoes sensiveis no codigo.

## 4. Compartilhamento e controle de acesso

O compartilhamento do codigo deve acontecer por GitHub, com branches separadas por tarefa. Sugestao de fluxo:

- `main`: versao estavel.
- `feature/nome-da-funcionalidade`: novas funcionalidades.
- `docs/ajuste-documentacao`: alteracoes de documentacao.
- `fix/correcao`: correcoes de bugs.

O arquivo `CONTRIBUTING.md` documenta o processo para colaboradores.

## 5. Finalizacao da integracao e testes

Antes da entrega, foram previstas as seguintes verificacoes:

- Rodar `npm install`.
- Rodar `npm run build`.
- Abrir a aplicacao localmente.
- Conferir responsividade em desktop e celular.
- Testar se os dados do GitHub carregam corretamente.
- Conferir se README, seguranca e contribuicao estao presentes.

## 6. Revisao final e apresentacao

Para a apresentacao em video, a sugestao de roteiro e:

1. Apresentar o objetivo do PortfolioHUB.
2. Mostrar a pagina inicial e o perfil de Pedro Henrique.
3. Mostrar a integracao dinamica com GitHub.
4. Explicar as secoes do desafio dentro da tela.
5. Mostrar os arquivos de seguranca e colaboracao.
6. Encerrar com a URL publicada no GitHub Pages.

## Entregaveis

- Codigo-fonte do PortfolioHUB.
- Link do repositorio GitHub.
- Link do GitHub Pages.
- PDF final com descricao do processo.
- Link da apresentacao no YouTube.
