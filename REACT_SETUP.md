# Wiki Bakugan Battle Planet - React Version

## Descrição

Versão React da Wiki Bakugan Battle Planet, convertida de HTML/CSS/JS puro para React com Vite.

## Estrutura do Projeto

```
src/
├── App.jsx                           # Componente principal
├── main.jsx                          # Ponto de entrada do React
├── index.css                         # Estilos globais
├── components/
│   ├── Header.jsx                    # Header com logo e navegação externa
│   ├── Navigation.jsx                # Navegação interna (abas)
│   ├── Footer.jsx                    # Footer
│   └── sections/
│       ├── BakuganSection.jsx        # Seção sobre Bakugan TCG
│       ├── RegrasSection.jsx         # Seção de Regras
│       ├── ComoJogarSection.jsx      # Seção Como Jogar
│       └── MultijogadorSection.jsx   # Seção Modo Multijogador
├── App.jsx                           # Componente raiz
├── main.jsx                          # Entry point do React
└── index.css                         # Estilos CSS

vite.config.js                        # Configuração do Vite
package.json                          # Dependências do projeto
index.html                            # Template HTML
```

## Instalação

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn instalado

### Passos

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   - Abra `http://localhost:5173` (ou a URL mostrada no terminal)

## Comandos Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento com hot-reload
- `npm run build` — Cria um build otimizado para produção na pasta `dist/`
- `npm run preview` — Visualiza o build de produção localmente

## Principais Mudanças em Relação à Versão HTML

1. **Componentes Reutilizáveis** — Cada seção é um componente React
2. **Navegação com Estado** — Usa `useState` para gerenciar qual seção está ativa
3. **Hot Module Replacement** — Mudanças em tempo real durante desenvolvimento
4. **Build Otimizado** — Vite gera um bundle altamente otimizado
5. **Importações ES6** — Módulos JavaScript modernos

## Como Funciona a Navegação

- Clique nos botões de navegação (Bakugan, Regras, Como Jogar, Multijogador)
- O estado do componente muda e renderiza a seção correspondente
- Os links do header (Facções, Cartas, BakuCores) ainda apontam para as páginas HTML originais

## Próximos Passos de Migração

Para completar a migração, você pode:

1. **Converter outras páginas para React:**
   - `faccoes.html` → `src/pages/Faccoes.jsx`
   - `cartas.html` → `src/pages/Cartas.jsx`
   - `bakucores.html` → `src/pages/BakuCores.jsx`

2. **Implementar React Router:**
   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom'
   ```

3. **Centralizar Dados:**
   - Mover dados do `data.json` para um contexto React ou estado global

4. **Adicionar Funcionalidades Dinâmicas:**
   - Filtros de cartas
   - Deck Builder
   - Busca avançada

## Dependências

- **react** - Biblioteca principal do React
- **react-dom** - Renderização do React no DOM
- **react-router-dom** - Roteamento (preparado para futura implementação)
- **vite** - Build tool moderno e rápido
- **@vitejs/plugin-react** - Plugin do Vite para React

## Estilos

Os estilos foram movidos para `src/index.css` e mantêm toda a temática original:
- Fundo com imagem do Bakugan
- Cores das facções (Pyrus, Aquos, Ventus, Haos, Darkus, Aurelus)
- Design responsivo com media queries
- Animações e transições suaves

## Notas Importantes

- O arquivo `style.css` original ainda existe na raiz (mas não é mais utilizado)
- As imagens devem estar na pasta `public/Img/` para funcionarem corretamente no build
- Para deploy em produção, use `npm run build` e hospede o conteúdo da pasta `dist/`

## Suporte

Para dúvidas ou problemas:
1. Verifique se todas as dependências foram instaladas (`npm install`)
2. Limpe o cache do navegador (Ctrl+Shift+Del)
3. Recrie a pasta `node_modules` e `package-lock.json` se necessário
