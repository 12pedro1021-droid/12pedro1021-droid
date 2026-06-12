# Guia de Contribuicao

Este guia documenta o compartilhamento e controle de acesso do PortfolioHUB.

## Controle de acesso

- A branch `main` deve representar a versao estavel.
- Alteracoes devem ser feitas em branches separadas.
- Pull Requests devem ser revisados antes do merge.
- Colaboradores devem receber permissao adequada no GitHub.

## Fluxo sugerido

1. Criar uma branch:

```bash
git checkout -b feature/minha-melhoria
```

2. Fazer commits claros:

```bash
git commit -m "feat: adiciona nova secao ao portifolio"
```

3. Enviar a branch:

```bash
git push origin feature/minha-melhoria
```

4. Abrir um Pull Request para `main`.

## Padrao de qualidade

- Rodar `npm run build` antes de enviar.
- Conferir se a pagina abre sem erros.
- Atualizar a documentacao quando alterar fluxo, seguranca ou deploy.
- Nao publicar dados sensiveis.

## Bugs e seguranca

- Bugs comuns podem ser relatados por Issue.
- Vulnerabilidades devem seguir o fluxo descrito em `SECURITY.md`.
