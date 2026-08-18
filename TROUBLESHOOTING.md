# Guia de Troubleshooting - Erros Comuns

## Seu projeto está funcionando!

O servidor Vite iniciou com sucesso em `http://localhost:5173/`.

---

## Problemas Comuns e Soluções

### 1. Erro: "npm: command not found"

**Solução:**
```bash
# Instale Node.js em:
# https://nodejs.org/ (versão 16+ recomendada)

# Verifique se está instalado:
node --version
npm --version
```

### 2. Erro: "Cannot find module '@vitejs/plugin-react'"

**Solução:**
```bash
# Delete node_modules e package-lock.json
rm -rf node_modules package-lock.json

# Reinstale tudo
npm install
```

### 3. Porta 5173 já em uso

**Solução A:** Use outra porta
```bash
npm run dev -- --port 3000
```

**Solução B:** Finalize o processo usando a porta 5173
```bash
# Encontre qual processo está usando porta 5173
lsof -i :5173

# Mate o processo (substitua PID)
kill -9 <PID>
```

### 4. Erro: "Uncaught SyntaxError: unexpected token"

**Solução:** Verificar se está usando um navegador moderno
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 5. Imagens não aparecem (logo.png, background)

**Solução A:** Certifique-se que as imagens estão em `public/Img/`
```bash
ls -la public/Img/
```

**Solução B:** Se a pasta `public/` não existe, crie-a:
```bash
mkdir -p public/Img
cp Img/* public/Img/
```

### 6. Erro ao fazer build: "vite build fails"

**Solução:**
```bash
# Limpe o cache
rm -rf dist/
rm -rf node_modules/.vite

# Recrie o build
npm run build
```

### 7. Erro: "Cannot GET /" ao acessar localhost:5173

**Solução:** Certifique-se de que:
1. Você está no diretório correto: `/home/2022.2.08.001/SiteBakugan`
2. O arquivo `index.html` existe na raiz
3. A pasta `src/` contém todos os componentes

```bash
# Verifique
ls -la index.html
ls -la src/main.jsx
```

---

## Passos para Executar

### Desenvolvimento Local

```bash
# 1. Entre no diretório
cd /home/2022.2.08.001/SiteBakugan

# 2. Instale dependências (se ainda não fez)
npm install

# 3. Inicie o servidor
npm run dev

# 4. Abra no navegador
# http://localhost:5173
```

### Build para Produção

```bash
# Crie o bundle otimizado
npm run build

# Visualize o build
npm run preview

# Acesse: http://localhost:4173
```

---

## Verificações de Saúde

### 1. Verificar Node.js e npm

```bash
node --version    # Deve ser v16+ 
npm --version     # Deve ser 8+
```

### 2. Verificar estrutura do projeto

```bash
# Certifique-se que esses arquivos existem:
ls -la index.html
ls -la package.json
ls -la vite.config.js
ls -la src/main.jsx
ls -la src/App.jsx
```

### 3. Verificar dependências

```bash
# Deve mostrar React, Vite, etc
npm list --depth=0
```

### 4. Limpar cache e reinstalar

```bash
# Remova tudo e recrie
rm -rf node_modules
rm -rf package-lock.json
npm install
npm run dev
```

---

## Se Nada Disso Funcionar

**Compartilhe comigo:**
1. Qual é o erro exato que você está vendo?
2. Rode este comando e compartilhe a saída:
   ```bash
   cd /home/2022.2.08.001/SiteBakugan && npm run dev 2>&1
   ```

3. Qual é o seu sistema operacional?
4. Qual versão do Node.js você tem?
   ```bash
   node --version
   ```

---

## Comandos Úteis para Debug

```bash
# Ver logs do Vite
npm run dev

# Ver versão das dependências
npm list react react-dom vite

# Forçar reinstalação
npm ci

# Limpar cache npm
npm cache clean --force

# Ver estrutura de pastas
tree -L 3 -I 'node_modules|.git'
```

---

## Console do Navegador

Quando acessar `http://localhost:5173`:

1. Abra F12 ou Ctrl+Shift+I (DevTools)
2. Vá para a aba "Console"
3. Procure por mensagens de erro em vermelho
4. Compartilhe qualquer erro que apareça

---

## Próximos Passos

Quando o servidor estiver rodando:

1. **Teste a navegação:** Clique nos botões (Bakugan, Regras, Como Jogar, Multijogador)
2. **Verifique o console:** Procure por erros vermelhos
3. **Teste o build:**
   ```bash
   npm run build
   npm run preview
   ```

---

**Qual é o erro específico que está vendo?** Compartilhe comigo para eu ajudar a corrigir!
