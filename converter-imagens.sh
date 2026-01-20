#!/bin/bash
# Script de conversão de imagens PNG para WebP
# Qualidade: 85% (ótimo balanço entre qualidade e tamanho)

cd "$(dirname "$0")/modelo"

echo "🔄 Convertendo imagens PNG para WebP..."
echo ""

# Lista de imagens para converter
images=(
    "Logo-Deitada-Apvs.png"
    "slid-1-carro-1536x369.png"
    "Slid-2-moto-1536x369.png"
    "Slid-3-Vam-1536x369.png"
    "Sld-4-Caminhao-1536x369.png"
    "3-escudos-1536x224.png"
    "atendente_flipped.png"
)

total=0
converted=0

for img in "${images[@]}"; do
    if [ -f "$img" ]; then
        base="${img%.png}"
        output="${base}.webp"
        
        # Pegar tamanho original
        size_before=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        size_before_kb=$((size_before / 1024))
        
        echo "📸 Convertendo: $img ($size_before_kb KB)"
        
        # Converter com qualidade 85
        cwebp -q 85 "$img" -o "$output" 2>/dev/null
        
        if [ -f "$output" ]; then
            # Pegar tamanho novo
            size_after=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
            size_after_kb=$((size_after / 1024))
            reduction=$(( (size_before - size_after) * 100 / size_before ))
            
            echo "   ✅ Criado: $output ($size_after_kb KB) - Redução: $reduction%"
            ((converted++))
            ((total += size_before - size_after))
        else
            echo "   ❌ Erro ao converter $img"
        fi
        echo ""
    else
        echo "⚠️  Arquivo não encontrado: $img"
        echo ""
    fi
done

total_kb=$((total / 1024))
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Conversão concluída!"
echo "📊 Imagens convertidas: $converted/${#images[@]}"
echo "💾 Espaço economizado: $total_kb KB"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
