#!/bin/bash
# Script para atualizar todas as referências de PNG para WebP no código

echo "🔄 Atualizando referências no código..."
echo ""

# Backup dos arquivos originais
echo "📦 Criando backup..."
cp index.html index.html.backup
cp style.css style.css.backup
cp script.js script.js.backup
echo "   ✅ Backup criado"
echo ""

# Atualizar index.html
echo "📝 Atualizando index.html..."
sed -i.tmp 's/Logo-Deitada-Apvs\.png/Logo-Deitada-Apvs.webp/g' index.html
sed -i.tmp 's/slid-1-carro-1536x369\.png/slid-1-carro-1536x369.webp/g' index.html
sed -i.tmp 's/Slid-2-moto-1536x369\.png/Slid-2-moto-1536x369.webp/g' index.html
sed -i.tmp 's/Slid-3-Vam-1536x369\.png/Slid-3-Vam-1536x369.webp/g' index.html
sed -i.tmp 's/Sld-4-Caminhao-1536x369\.png/Sld-4-Caminhao-1536x369.webp/g' index.html
sed -i.tmp 's/3-escudos-1536x224\.png/3-escudos-1536x224.webp/g' index.html
rm index.html.tmp
echo "   ✅ index.html atualizado"

# Atualizar style.css
echo "📝 Atualizando style.css..."
sed -i.tmp "s/atendente_flipped\.png/atendente_flipped.webp/g" style.css
rm style.css.tmp
echo "   ✅ style.css atualizado"

# Atualizar script.js
echo "📝 Atualizando script.js..."
sed -i.tmp 's/slid-1-carro-1536x369\.png/slid-1-carro-1536x369.webp/g' script.js
sed -i.tmp 's/Slid-2-moto-1536x369\.png/Slid-2-moto-1536x369.webp/g' script.js
sed -i.tmp 's/Slid-3-Vam-1536x369\.png/Slid-3-Vam-1536x369.webp/g' script.js
sed -i.tmp 's/Sld-4-Caminhao-1536x369\.png/Sld-4-Caminhao-1536x369.webp/g' script.js
rm script.js.tmp
echo "   ✅ script.js atualizado"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Atualização concluída!"
echo "📋 Arquivos de backup criados:"
echo "   - index.html.backup"
echo "   - style.css.backup"
echo "   - script.js.backup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
