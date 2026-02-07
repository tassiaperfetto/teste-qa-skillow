# Teste Técnico QA — Skillow — Playwright

## Objetivo

Este repositório contém a entrega do teste técnico de QA, contemplando:

- Casos de teste manuais
- Automação com Playwright
- Validações de API
- Evidências de execução

---

## Casos de Teste — Site Skillow

Foram criados cenários de teste para validação da landing page:

https://lp.skillow.com.br/

Cobertura:

- acesso à página
- carregamento
- conteúdo principal
- validação de texto principal

A planilha com os casos de teste manuais está anexada na entrega.

---

## Testes Automatizados — Playwright

Automação criada em **TypeScript** usando Playwright.
Arquivo principal de teste:

tests/skillow.spec.ts

### Como executar os testes

Instalar dependências:

npm install

Executar testes:

npx playwright test

Abrir relatório HTML:

npx playwright show-report

---

## Teste de API — PokeAPI

Ferramenta utilizada: Postman

Endpoint testado:

GET https://pokeapi.co/api/v2/pokemon/ditto

Validações realizadas no retorno:

- name = ditto
- id = 132
- type = normal

Os prints das validações estão disponíveis na pasta:

/evidências

---

## Evidências

Foram incluídas evidências de:

- execução dos testes Playwright
- relatório de execução
- validações da API no Postman

---

## Stack utilizada

- Playwright
- TypeScript
- Node.js
- Postman
- GitHub


Arquivo principal:

