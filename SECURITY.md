# Política de Segurança

Este documento descreve as práticas de segurança recomendadas para o PortfolioHUB de Pedro Henrique.

## Versão suportada

| Versão | Suporte |
| --- | --- |
| v1.0.x | Sim |
| anteriores | Não |

## Como reportar vulnerabilidades

Não abra uma Issue pública expondo uma falha de segurança. Envie um e-mail para:

```text
12pedro1021@gmail.com
```

Inclua:

- Descrição do problema.
- Passos para reproduzir.
- Impacto esperado.
- Navegador, sistema operacional e contexto do teste.

## Boas práticas aplicadas

- Nenhum token ou chave privada fica salvo no código.
- A aplicação usa apenas endpoints públicos do GitHub.
- O fluxo recomendado exige Pull Request antes de alterações na branch `main`.
- As dependências devem ser revisadas com frequência.
- O deploy deve ser feito por GitHub Actions ou GitHub Pages.

## Escopo

Estão dentro do escopo:

- Código-fonte deste PortfolioHUB.
- Configurações do repositório do projeto.
- Documentação de segurança e colaboração.

Estão fora do escopo:

- Ataques de engenharia social.
- Tentativas de derrubar serviços.
- Testes em contas, e-mails ou recursos pessoais.
- Vulnerabilidades em serviços de terceiros fora do controle do projeto.
