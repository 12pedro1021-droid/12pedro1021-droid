# Plano de Implantação - PortfolioHUB Pedro Henrique

## 1. Planejamento da implantação

Planejei o PortfolioHUB como uma página para reunir meus projetos e mostrar minha evolução. Escolhi React com Vite porque é uma forma prática de criar um site rápido e publicar no GitHub Pages.

Usei IA como apoio para revisar os requisitos do desafio, organizar as etapas e melhorar alguns textos.

## 2. Configuração inicial e integração com GitHub

O projeto usa meu perfil `12pedro1021-droid` como origem dos dados. A aplicação busca meus repositórios públicos pela API do GitHub:

```text
https://api.github.com/users/12pedro1021-droid/repos?sort=updated&per_page=8
```

Com isso, o portfólio pode mostrar meus projetos sem precisar cadastrar tudo manualmente.

## 3. Gestão de usuários e segurança

Para manter o projeto mais organizado, a ideia é usar o GitHub com cuidado:

- evitar colocar senhas, tokens ou dados pessoais no código;
- usar Pull Request quando houver mudanças importantes;
- revisar alterações antes de publicar;
- manter as dependências atualizadas;
- deixar a branch `main` como versão estável.

## 4. Compartilhamento e controle de acesso

O código fica no GitHub e pode ser atualizado por branches. O fluxo sugerido é:

- `main`: versão publicada;
- `feature/nome-da-funcionalidade`: melhorias novas;
- `fix/correcao`: correções de problemas;
- `docs/ajuste-documentacao`: mudanças na documentação.

## 5. Finalização da integração e testes

Antes de publicar, conferi os pontos principais:

- instalação das dependências;
- build do projeto;
- abertura da página no navegador;
- carregamento dos repositórios do GitHub;
- responsividade básica;
- revisão dos arquivos de documentação.

## 6. Revisão final

Na revisão final, conferi se o site estava com os textos corretos, se as seções do desafio estavam presentes e se o link publicado no GitHub Pages estava funcionando.

## IAs utilizadas

- Google Gemini: apoio para interpretar o desafio e revisar etapas da implantação.
- ChatGPT: apoio para revisão textual, correção de erros e organização do site.

## Entregáveis

- Código-fonte do PortfolioHUB.
- Link do repositório no GitHub.
- Link do site publicado no GitHub Pages.
- PDF final com descrição do processo.
