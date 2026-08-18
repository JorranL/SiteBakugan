# Bakugan: Battle Planet — Wiki & Tactical Database

> Uma aplicação web interativa desenvolvida em **React** e **Vite** para catalogar regras, mecânicas de combate, facções, tipos de cartas e BakuCores do TCG **Bakugan: Battle Planet**.

![Bakugan](https://img.shields.io/badge/Bakugan-Battle%20Planet-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-Build-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=for-the-badge)

---

## 📖 Visão Geral do Projeto

O projeto é uma **Single Page Application (SPA)** construída para servir como base de conhecimento rápida, visual e acessível tanto para novos jogadores quanto para veteranos do jogo de cartas colecionáveis.

A plataforma organiza todo o ecossistema do jogo em módulos visuais temáticos:
* **Facções Elementais:** Detalhamento tático dos 6 atributos com exibição ampliada de cartas de exemplo, estratégias principais, forças, fraquezas e parceiros notáveis.
* **BakuCores:** Catálogo dos 5 tipos de núcleos hexagonais (*Helix, Fist, Fire Fist, Shield e Magic Shield*) e seus respectivos bônus de B-Power e dano.
* **Mecânicas de Cartas:** Guia completo cobrindo tipos de cartas (*Ação, Herói, Flip, Evo e Energias*), regras de habilidades (*Desencadeadas, Ativadas e Estáticas*) e efeitos de combate (*Fury, Shadowstrike, Team Attack, Victor, etc.*).
* **Guia de Jogo (Wiki):** Regras fundamentais, condições de vitória e dinâmicas multijogador.

---

## ⚡ Funcionalidades e Destaques da Interface

* **Arquitetura SPA com React Context:** Navegação instantânea e troca de visualizações via `PageContext`, sem recarregamentos no navegador.
* **Navegação Lateral Deslizante (Drawer Menu):** Menu offcanvas acessado por botão hambúrguer, mantendo o topo limpo e a navegação acessível em qualquer ponto da rolagem.
* **Header Fixo (Sticky Header):** Barra superior compacta com efeito de vidro fosco (*glassmorphism*) que não encobre os menus e seletores internos.
* **Hubs Visuais de Seleção:** Telas iniciais com botões/cards ampliados e efeitos de hover dedicados para seleção rápida de categorias.
* **Grid 2x3 & Tabela Comparativa de Facções:** Apresentação em grade temática sincronizada com as cores oficiais de cada elemento, acompanhada de tabela comparativa de estilos de jogo.
* **Visualizador Detalhado de Cartas:** Layout em duas colunas projetado para manter a nitidez e legibilidade total dos balões de texto, números e ícones das cartas de exemplo.
---
## 🛠️ Tecnologias Utilizadas

* **React 18:** Construção de componentes declarativos, reutilizáveis e gerenciamento de estado.
* **Vite:** Empacotamento de assets e ambiente de execução de alto desempenho.
* **JavaScript (ES6+):** Lógica funcional, mapeamento de coleções e renderização dinâmica.
* **CSS3:** Estruturação via Flexbox e CSS Grid, efeitos de iluminação e *backdrop-filter*.

---

## 🛡️ Identidade Visual das Facções

| Facção | Elemento | Cor Tema | Hex |
|---|---|---|---|
| **Pyrus** | Fogo | Vermelho | `#E41A1A` |
| **Ventus** | Vento | Verde | `#126E3C` |
| **Haos** | Luz | Turquesa | `#3D9797` |
| **Aquos** | Água | Azul | `#3E7396` |
| **Darkus** | Trevas | Roxo / Púrpura | `#9B59B6` |
| **Aurelus** | Luz Antiga | Dourado | `#D4AF37` |

---

## 👤 Autor

Desenvolvido como projeto pessoal de consulta e documentação para a comunidade de jogadores e fãs de **Bakugan: Battle Planet**.

---

## 📄 Informações Legais

Este projeto possui caráter educacional e de pesquisa. Todos os direitos de propriedade intelectual, ilustrações, personagens e marcas pertencem à **Spin Master** e aos respectivos detentores de direitos autorais.
