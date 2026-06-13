# Guia de Contribuição

Este guia documenta o compartilhamento e o controle de acesso do PortfolioHUB.

## Controle de acesso

- A branch `main` deve representar a versão estável.
- Alterações devem ser feitas em branches separadas.
- Pull Requests devem ser revisados antes do merge.
- Colaboradores devem receber permissão adequada no GitHub.

## Fluxo sugerido

1. Criar uma branch:

```bash
git checkout -b feature/minha-melhoria
```

2. Fazer commits claros:

```bash
git commit -m "feat: adiciona nova secao ao portfolio"
```

3. Enviar a branch:

```bash
git push origin feature/minha-melhoria
```

4. Abrir um Pull Request para `main`.

## Padrão de qualidade

- Rodar `npm run build` antes de enviar.
- Conferir se a página abre sem erros.
- Atualizar a documentação quando alterar fluxo, segurança ou deploy.
- Não publicar dados sensíveis.

## Bugs e segurança

- Bugs comuns podem ser relatados por Issue.
- Vulnerabilidades devem seguir o fluxo descrito em `SECURITY.md`.
