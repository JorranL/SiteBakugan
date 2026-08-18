#!/bin/bash

# Script de Diagnóstico - Wiki Bakugan React

echo "========================================="
echo "DIAGNÓSTICO - Wiki Bakugan React"
echo "========================================="
echo ""

# 1. Verificar Node.js e npm
echo "1. Verificando Node.js e npm..."
node --version
npm --version
echo "✓ OK" || echo "✗ ERRO"
echo ""

# 2. Verificar estrutura
echo "2. Verificando estrutura de pastas..."
echo "Arquivos principais:"
ls -la index.html package.json vite.config.js 2>/dev/null | grep -v total || echo "✗ Arquivo faltando"
echo ""

echo "Componentes React:"
ls -la src/main.jsx src/App.jsx 2>/dev/null | grep -v total || echo "✗ Arquivo faltando"
echo ""

# 3. Verificar node_modules
echo "3. Verificando node_modules..."
if [ -d "node_modules" ]; then
    echo "✓ node_modules encontrado"
    npm list --depth=0 2>/dev/null | head -15
else
    echo "✗ node_modules NÃO encontrado"
    echo "Execute: npm install"
fi
echo ""

# 4. Verificar imagens
echo "4. Verificando imagens..."
if [ -d "Img" ]; then
    echo "✓ Pasta Img encontrada:"
    ls -la Img/ | head -10
else
    echo "✗ Pasta Img NÃO encontrada"
fi
echo ""

# 5. Verificar public folder
echo "5. Verificando pasta public/ (para imagens em produção)..."
if [ -d "public" ]; then
    echo "✓ Pasta public encontrada"
    ls -la public/ 2>/dev/null
else
    echo "⚠ Pasta public NÃO encontrada (pode ser necessário para build)"
fi
echo ""

# 6. Testar instalação
echo "6. Tentando listar dependências instaladas..."
npm list react react-dom vite @vitejs/plugin-react 2>/dev/null | grep -E "react|vite" || echo "✗ Dependências faltando"
echo ""

echo "========================================="
echo "PRÓXIMOS PASSOS:"
echo "========================================="
echo ""
echo "Se tudo passou ✓:"
echo "  npm run dev"
echo "  Abra: http://localhost:5173"
echo ""
echo "Se algo falhou ✗:"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "Para build de produção:"
echo "  npm run build"
echo "========================================="
