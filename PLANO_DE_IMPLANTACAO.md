# Plano de Implantação - PortfolioHUB Pedro Henrique

## 1. Planejamento da implantação

O PortfolioHUB foi planejado como uma plataforma simples, responsiva e centralizada para apresentar os projetos digitais de Pedro Henrique. A stack escolhida foi React com Vite, pois permite desenvolvimento rápido, build leve e publicação simples no GitHub Pages.

O apoio de IA foi usado como guia para organizar requisitos, estruturar a interface, revisar textos, criar documentação e conferir boas práticas de segurança.

## 2. Configuração inicial e integração com GitHub

O projeto usa o perfil `12pedro1021-droid` como origem pública dos dados. A aplicação consome a API:

```text
https://api.github.com/users/12pedro1021-droid/repos?sort=updated&per_page=8
```

Com isso, os repositórios aparecem automaticamente no portfólio sem precisar editar o código sempre que um novo projeto for publicado.

## 3. Gestão de usuários e segurança

Para controle de acesso, a branch principal deve receber alterações apenas por Pull Request. A recomendação de configuração no GitHub é:

- Exigir Pull Request antes de merge.
- Exigir revisão antes de aprovar mudanças.
- Bloquear push direto na branch `main`.
- Manter dependências atualizadas.
- Evitar expor chaves, tokens e informações sensíveis no código.

## 4. Compartilhamento e controle de acesso

O compartilhamento do código deve acontecer por GitHub, com branches separadas por tarefa. Sugestão de fluxo:

- `main`: versão estável.
- `feature/nome-da-funcionalidade`: novas funcionalidades.
- `docs/ajuste-documentacao`: alterações de documentação.
- `fix/correcao`: correções de bugs.

O arquivo `CONTRIBUTING.md` documenta o processo para colaboradores.

## 5. Finalização da integração e testes

Antes da entrega, foram previstas as seguintes verificações:

- Rodar `npm install`.
- Rodar `npm run build`.
- Abrir a aplicação localmente.
- Conferir responsividade em desktop e celular.
- Testar se os dados do GitHub carregam corretamente.
- Conferir se README, segurança e contribuição estão presentes.

## 6. Revisão final e apresentação

Para a apresentação em vídeo, a sugestão de roteiro é:

1. Apresentar o objetivo do PortfolioHUB.
2. Mostrar a página inicial e o perfil de Pedro Henrique.
3. Mostrar a integração dinâmica com GitHub.
4. Explicar as seções do desafio dentro da tela.
5. Mostrar os arquivos de segurança e colaboração.
6. Mostrar a seção de IAs utilizadas.
7. Encerrar com a URL publicada no GitHub Pages.

## IAs utilizadas

- Google Gemini: planejamento, revisão dos critérios do desafio e apoio para boas práticas.
- ChatGPT / Codex: correção do portfólio, revisão textual, organização das seções e execução local.
- GitHub Copilot: sugestão opcional de código para futuras melhorias.

## Google Workspace

O Google Workspace pode ser usado para organizar a entrega final:

- Google Docs: criação do PDF final.
- Google Drive: armazenamento das evidências e do link do vídeo.
- Google Slides: apoio para apresentação.
- YouTube: publicação da apresentação solicitada no desafio.

## Entregáveis

- Código-fonte do PortfolioHUB.
- Link do repositório GitHub.
- Link do GitHub Pages.
- PDF final com descrição do processo.
- Link da apresentação no YouTube.
