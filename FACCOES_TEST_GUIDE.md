# Guia de Teste - Facções em React

## ✅ Conversão Completa!

A página `faccoes.html` foi convertida para React com sucesso!

---

## 🚀 Como Testar

### 1. Inicie o servidor:
```bash
cd /home/2022.2.08.001/SiteBakugan
npm run dev
```

### 2. Abra no navegador:
```
http://localhost:5173
```

### 3. Teste a navegação:

**Opção A - Do Header:**
- Clique no botão "Facções" (lado direito do header)
- Você será levado à página de Facções

**Opção B - Da Página Inicial:**
- A página carrega na home (Wiki)
- No header, clique em "Facções"
- Verá todas as 6 facções

---

## 🎮 Funcionalidades para Testar

### 1. Abas de Facções
Quando estiver em Facções, veja as abas superiores:
- "Início" — Mostra descrição geral e todas as facções
- "Pyrus" (ícone de fogo) — Mostra apenas Pyrus
- "Ventus" (ícone de vento) — Mostra apenas Ventus
- "Haos" (ícone de luz) — Mostra apenas Haos
- "Aquos" (ícone de água) — Mostra apenas Aquos
- "Darkus" (ícone de trevas) — Mostra apenas Darkus
- "Aurelus" (ícone de ouro) — Mostra apenas Aurelus

**Teste:** Clique em cada aba para ver o conteúdo mudar dinamicamente

### 2. Informações de Cada Facção
Para cada facção você verá:
- ✅ Nome e subtítulo (cor temática)
- ✅ Descrição completa
- ✅ Estilo de jogo
- ✅ Habilidade principal
- ✅ Estratégia recomendada
- ✅ Fraquezas
- ✅ Bakugans icônicos
- ✅ Imagem de exemplo de carta

**Teste:** Role para baixo em cada facção para ver todos os detalhes

### 3. Tabela Comparativa
Ao clicar em "Início", role para o final da página para ver a tabela.

- ✅ Compara todas as 6 facções lado a lado
- ✅ Mostra estilo, habilidade e estratégia
- ✅ Linhas com cores alternadas para melhor leitura

**Teste:** Veja a tabela e compare as facções

### 4. Navegação Entre Páginas
- Clique em "Wiki" — Volta para a página inicial
- Clique em "Facções" — Volta para facções
- "Cartas" e "BakuCores" — Desabilitados (ainda em HTML)

**Teste:** Alterne entre Wiki e Facções várias vezes

---

## 📊 O que foi Criado

### Estrutura:
```
src/
├── pages/
│   ├── Home.jsx           ← Página inicial
│   └── Faccoes.jsx        ← Página de facções
├── components/
│   ├── FactionCard.jsx    ← Card de facção
│   ├── FactionTable.jsx   ← Tabela comparativa
│   ├── Header.jsx         ← Header atualizado
│   └── ...
├── context/
│   └── PageContext.jsx    ← Contexto de navegação
└── App.jsx                ← Gerencia páginas
```

### Dados:
- Array com 6 facções completas
- Cada facção tem ~10 propriedades
- Dados estruturados em `src/pages/Faccoes.jsx`

---

## 🎨 Elementos Visuais

- ✅ **Ícones por facção** — Cada aba tem um ícone
- ✅ **Cores temáticas** — Cada facção tem sua cor
- ✅ **Imagens de cartas** — Exemplos visuais
- ✅ **Tabela estilizada** — Com hover effects
- ✅ **Responsivo** — Funciona em mobile

---

## 🐛 Se algo não aparecer

1. **Imagens não carregam?**
   - Certifique-se que a pasta `public/Img/` tem todas as imagens
   - Verifique se os nomes dos arquivos estão corretos

2. **Erro no console?**
   - Abra DevTools (F12)
   - Procure por erros vermelhos
   - Compartilhe comigo se encontrar

3. **Página em branco?**
   - Recarregue (Ctrl+F5)
   - Verifique se o servidor está rodando
   - Olhe no terminal para mensagens de erro

---

## 📝 Resumo das Mudanças

### Antes (HTML):
```html
<!-- Página estática com âncoras -->
<a href="#pyrus">Pyrus</a>
<section id="pyrus">...</section>
```

### Depois (React):
```jsx
// Componentes dinâmicos
<button onClick={() => setActiveFaction('pyrus')}>Pyrus</button>
{activeFaction === 'pyrus' && <FactionCard faction={FACTIONS[0]} />}
```

---

## 🎯 Próximas Conversões

Quando quiser, podemos converter:
- `cartas.html` → `src/pages/Cartas.jsx`
- `bakucores.html` → `src/pages/BakuCores.jsx`

E então implementar React Router para URLs mais limpas:
- `/` → Home
- `/faccoes` → Facções
- `/cartas` → Cartas
- `/bakucores` → BakuCores

---

## 💡 Dicas

- **Hot-reload:** Qualquer mudança em um arquivo `.jsx` atualiza o navegador automaticamente
- **Devtools:** Instale "React Developer Tools" para inspeção de componentes
- **Performance:** A página só renderiza a facção ativa (melhor que HTML)

---

## ✅ Checklist de Teste

- [ ] Servidor inicia sem erros
- [ ] Página carrega em http://localhost:5173
- [ ] Botão "Facções" funciona
- [ ] Abas de facção funcionam
- [ ] Cada facção mostra seus dados
- [ ] Tabela comparativa aparece
- [ ] Botão "Wiki" volta para home
- [ ] Imagens carregam corretamente
- [ ] Cores das facções estão corretas
- [ ] Responsivo em mobile (F12 > Toggle Device)

---

## 📞 Problemas?

Se tiver qualquer problema:
1. Verifique se está na pasta correta
2. Rode `npm install` se necessário
3. Mate o servidor e reinicie com `npm run dev`
4. Compartilhe o erro comigo

---

## 🎉 Parabéns!

Você agora tem uma **página de Facções totalmente em React**! 🚀

Próximo passo: Converter Cartas e BakuCores!
