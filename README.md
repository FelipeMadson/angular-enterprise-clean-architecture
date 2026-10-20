# Angular 18 Enterprise Clean Architecture

[![CI](https://github.com/FelipeMadson/angular-enterprise-clean-architecture/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/angular-enterprise-clean-architecture/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-green.svg)](https://github.com/FelipeMadson/angular-enterprise-clean-architecture/releases)

Production-grade Angular 18 enterprise architecture featuring native **Signals**, **Standalone Components**, and **Domain-Driven Design (DDD)** layering. Designed by [Felipe Madison](https://github.com/FelipeMadson) to eliminate state management overhead while maintaining compile-time type safety.

## Architectural Topology

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        PRESENTATION LAYER                              │
│   • Standalone Components (OnPush Change Detection)                    │
│   • Reactive Template Consumers (Readonly Signals)                     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        APPLICATION LAYER                               │
│   • AccountStateService (Signal Store & Computed Aggregates)           │
│   • Use Cases & Command Dispatches (Result Pattern)                    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        DOMAIN LAYER                                    │
│   • Immutable Entities (Account, Balance)                              │
│   • Result<T, E> Error Value Contract                                  │
└────────────────────────────────────────────────────────────────────────┘
```

## Key Architectural Principles

- **Native Signals over NgRx Boilerplate**: Utilizes Angular 18 `signal` and `computed` primitives for granular reactivity with zero zone pollution.
- **Result Pattern**: Eliminates runtime exceptions by representing success and failure as strongly-typed values.
- **Enterprise Decoupling**: Pure domain contracts independent of presentation frameworks.

## Building and Verification

```bash
npm install
npm run build
npm test
```

## Author

Authored and maintained by **[Felipe Madison](https://github.com/FelipeMadson)**.
