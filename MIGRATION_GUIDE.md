# Guia de Migração: HTML/CSS/JS para React

## O que foi feito

A página `index.html` foi completamente convertida de HTML puro para React com a seguinte estrutura:

### Arquivos Criados

```
SiteBakugan/
├── src/
│   ├── main.jsx                           # Entry point do React
│   ├── App.jsx                            # Componente raiz com gerenciamento de estado
│   ├── index.css                          # Estilos CSS (movidos do style.css original)
│   ├── components/
│   │   ├── Header.jsx                     # Logo + Navegação externa
│   │   ├── Navigation.jsx                 # Abas internas (Bakugan, Regras, etc)
│   │   ├── Footer.jsx                     # Footer
│   │   └── sections/
│   │       ├── BakuganSection.jsx         # Seção 1: Bakugan TCG
│   │       ├── RegrasSection.jsx          # Seção 2: Regras do jogo
│   │       ├── ComoJogarSection.jsx       # Seção 3: Como Jogar
│   │       └── MultijogadorSection.jsx    # Seção 4: Modo Multijogador
├── package.json                           # Dependências (React, Vite)
├── vite.config.js                         # Configuração do Vite
├── index.html                             # Template HTML (apenas estrutura)
├── .gitignore                             # Arquivos ignorados pelo Git
└── REACT_SETUP.md                         # Este arquivo
```

## Comparação: Antes vs Depois

### ANTES (HTML Puro)

```html
<!-- Estrutura fixa, sem interatividade dinâmica -->
<section id="Bakugan">...</section>
<section id="Regras" style="display:none;">...</section>
<section id="ComoJogar" style="display:none;">...</section>
```

**Problemas:**
- Todo o conteúdo carregado no HTML
- Navegação com âncoras (#) 
- Sem hot-reload durante desenvolvimento
- Difícil reutilizar componentes
- Build manual

### DEPOIS (React)

```jsx
// Componentes dinâmicos e reutilizáveis
function App() {
  const [activeSection, setActiveSection] = useState('Bakugan')
  
  return (
    <>
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}  // Renderiza apenas o componente ativo
      <Footer />
    </>
  )
}
```

**Benefícios:**
- Componentes reutilizáveis
- Estado centralizado
- Hot Module Replacement (HMR)
- Melhor performance
- Build otimizado com Vite

## Como Rodar o Projeto

### 1. Instalar dependências

```bash
npm install
```

Isso instalará:
- React 18.2.0
- React DOM 18.2.0
- Vite 5.0.8
- E mais...

### 2. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### 3. Fazer build para produção

```bash
npm run build
```

Isso gera a pasta `dist/` pronta para deploy.

## Estrutura dos Componentes

### App.jsx (Componente Raiz)

```jsx
function App() {
  const [activeSection, setActiveSection] = useState('Bakugan')
  
  // Gerencia qual seção está visível
  // Renderiza: Header → Navigation → Seção Ativa → Footer
}
```

### Header.jsx

```jsx
export default function Header() {
  return (
    <header className="topbar">
      <img src="Img/logo.png" alt="Logo" />
      <h1>Wiki Bakugan Battle Planet</h1>
      <nav className="nav-externa">
        {/* Links para outras páginas HTML */}
      </nav>
    </header>
  )
}
```

### Navigation.jsx

```jsx
export default function Navigation({ activeSection, setActiveSection }) {
  // Botões que mudam o estado para mostrar/ocultar seções
  return (
    <header className="topbar-interna">
      <nav>
        {sections.map(section => (
          <button onClick={() => setActiveSection(section)}>
            {section}
          </button>
        ))}
      </nav>
    </header>
  )
}
```

### Sections (BakuganSection.jsx, RegrasSection.jsx, etc)

```jsx
export default function BakuganSection() {
  return (
    <section id="Bakugan">
      <h2>Bakugan TCG</h2>
      <p>Conteúdo da seção...</p>
    </section>
  )
}
```

## Como Converter Outras Páginas

Para converter `faccoes.html`, `cartas.html` e `bakucores.html`:

### 1. Criar componentes de página

```jsx
// src/pages/Faccoes.jsx
export default function Faccoes() {
  return (
    <div>
      <Header />
      {/* Conteúdo de faccoes.html aqui */}
      <Footer />
    </div>
  )
}
```

### 2. Instalar React Router

```bash
npm install react-router-dom
```

### 3. Configurar rotas

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Faccoes from './pages/Faccoes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faccoes" element={<Faccoes />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Dicas de Desenvolvimento

### Hot Module Replacement (HMR)

Qualquer mudança em um arquivo `.jsx` ou `.css` é automaticamente refletida no navegador sem recarregar a página.

### Console do navegador

Use `console.log()` para debug:

```jsx
function Navigation({ activeSection, setActiveSection }) {
  console.log('Seção ativa:', activeSection)
  // ...
}
```

### React DevTools

Instale a extensão "React Developer Tools" no Chrome para inspetar componentes.

### Build de Produção

```bash
npm run build
npm run preview  # Visualizar o build localmente
```

## Problemas Comuns

### Erro: "React is not defined"

**Solução:** No React 17+, não é necessário importar React explicitamente para JSX.

### Imagens não aparecem

**Solução:** Verificar se o caminho está correto. O Vite precisa que imagens estejam em `public/` ou sejam importadas.

```jsx
import logo from '../public/Img/logo.png'
// ou
<img src="/Img/logo.png" />  // Se estiver em public/
```

### Porta 5173 já em uso

**Solução:** Use uma porta diferente:

```bash
npm run dev -- --port 3000
```

## Performance

O Vite oferece:
- **Desenvolvimento rápido:** HMR instantâneo
- **Build rápido:** Otimização automática
- **Código-splitting:** Carregamento de módulos sob demanda
- **Minificação:** Bundle otimizado para produção

## Próximas Etapas Recomendadas

1. Converter páginas restantes (Facções, Cartas, BakuCores)
2. Implementar React Router para navegação entre páginas
3. Centralizar dados em um contexto React
4. Adicionar funcionalidades dinâmicas (filtros, busca)
5. Implementar Deck Builder interativo
6. Adicionar testes unitários com Vitest

## Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [React Hooks](https://react.dev/reference/react/hooks)

## Conclusão

A página index foi convertida com sucesso para React! Agora você tem:

✅ Componentes reutilizáveis  
✅ Estado gerenciado com useState  
✅ Hot Module Replacement (HMR)  
✅ Desenvolvimento mais rápido  
✅ Build otimizado com Vite  
✅ Base sólida para adicionar novas funcionalidades  

Próximo passo: Converter as outras páginas e implementar React Router! 🚀
