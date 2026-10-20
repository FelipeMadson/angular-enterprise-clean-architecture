# Angular 18 Enterprise Clean Architecture

[![CI](https://github.com/FelipeMadson/angular-enterprise-clean-architecture/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/angular-enterprise-clean-architecture/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-green.svg)](https://github.com/FelipeMadson/angular-enterprise-clean-architecture/releases)

Arquitetura corporativa em **Angular 18** desenvolvida com **Signals nativos**, **Standalone Components** e separação em camadas inspirada em **Clean Architecture** e DDD. Criado por [Felipe Madison](https://github.com/FelipeMadson) para máxima manutenibilidade, testabilidade e desempenho.

## Topologia Arquitetural

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        CAMADA DE APRESENTAÇÃO                          │
│   • Componentes Standalone (Estratégia OnPush)                          │
│   • Consumo de Signals Reativos no Template                            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        CAMADA DE APLICAÇÃO                             │
│   • AccountStateService (Estado Reativo com Signal & Computed)         │
│   • Padrão Result (Contratos Tipados sem Throw)                        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        CAMADA DE DOMÍNIO                               │
│   • Entidades Imutáveis (Account, Tier, Balance)                       │
│   • Inversão de Controle e Regras de Negócio Puras                     │
└────────────────────────────────────────────────────────────────────────┘
```

## Destaques de Engenharia

- **Reatividade Nativa com Signals**: Substitui a complexidade de reducers e actions do NgRx pelo poder nativo do Angular 18.
- **Padrão Result Tipado**: Trata erros de negócio como valores explícitos, eliminando try/catch descontrolados.
- **Zero AI Slop**: Código enxuto, tipado estritamente e com suíte de testes automatizados integrada.

## Compilação e Testes

```bash
npm install
npm run build
npm test
```

## Autor

Desenvolvido por **[Felipe Madison](https://github.com/FelipeMadson)**.
