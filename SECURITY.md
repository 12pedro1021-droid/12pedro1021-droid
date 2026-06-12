# Politica de Seguranca

Este documento descreve as praticas de seguranca recomendadas para o PortfolioHUB de Pedro Henrique.

## Versao suportada

| Versao | Suporte |
| --- | --- |
| v1.0.x | Sim |
| anteriores | Nao |

## Como reportar vulnerabilidades

Nao abra uma Issue publica expondo uma falha de seguranca. Envie um e-mail para:

```text
12pedro1021@gmail.com
```

Inclua:

- Descricao do problema.
- Passos para reproduzir.
- Impacto esperado.
- Navegador, sistema operacional e contexto do teste.

## Boas praticas aplicadas

- Nenhum token ou chave privada fica salvo no codigo.
- A aplicacao usa apenas endpoints publicos do GitHub.
- O fluxo recomendado exige Pull Request antes de alteracoes na branch `main`.
- As dependencias devem ser revisadas com frequencia.
- O deploy deve ser feito por GitHub Actions ou GitHub Pages.

## Escopo

Estao dentro do escopo:

- Codigo-fonte deste PortfolioHUB.
- Configuracoes do repositorio do projeto.
- Documentacao de seguranca e colaboracao.

Estao fora do escopo:

- Ataques de engenharia social.
- Tentativas de derrubar servicos.
- Testes em contas, e-mails ou recursos pessoais.
- Vulnerabilidades em servicos de terceiros fora do controle do projeto.
