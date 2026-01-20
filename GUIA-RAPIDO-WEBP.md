# 🚀 GUIA RÁPIDO - CONVERSÃO DE IMAGENS PARA WEBP

## Status da Instalação
O Homebrew está instalando o `webp` e suas dependências.
Isso pode demorar de 5 a 15 minutos (está compilando o cmake).

## Quando a instalação terminar, execute:

### Passo 1: Verificar se instalou
```bash
which cwebp
```
Deve retornar: `/usr/local/bin/cwebp` ou similar

### Passo 2: Converter as imagens
```bash
cd /Users/pantera/Desktop/cotacaoapvs.com
./converter-imagens.sh
```

### Passo 3: Atualizar o código
```bash
./atualizar-codigo.sh
```

### Passo 4: Testar o site
```bash
open index.html
```

## OU Execute tudo de uma vez:
```bash
cd /Users/pantera/Desktop/cotacaoapvs.com && \
./converter-imagens.sh && \
./atualizar-codigo.sh && \
open index.html
```

## Arquivos criados:
✅ `converter-imagens.sh` - Converte PNG → WebP
✅ `atualizar-codigo.sh` - Atualiza referências no código
✅ `OTIMIZACAO-IMAGENS.md` - Documentação completa

## O que será feito automaticamente:

### 1. Conversão (converter-imagens.sh):
- Logo-Deitada-Apvs.png → .webp
- slid-1-carro-1536x369.png → .webp
- Slid-2-moto-1536x369.png → .webp
- Slid-3-Vam-1536x369.png → .webp
- Sld-4-Caminhao-1536x369.png → .webp
- 3-escudos-1536x224.png → .webp
- atendente_flipped.png → .webp

### 2. Atualização de código (atualizar-codigo.sh):
- index.html: Todas as referências PNG → WebP
- style.css: Background atendente_flipped → WebP
- script.js: Imagens do carrossel → WebP
- Cria backups automáticos (.backup)

## Resultado Esperado:
📊 Redução de ~75% no tamanho das imagens
💾 Economia de ~2.5 MB
⚡ Site 3x mais rápido
🎯 Melhor pontuação no Google PageSpeed

## Se der erro:
1. Verifique se o brew terminou: `brew list | grep webp`
2. Reinstale se necessário: `brew reinstall webp`
3. Ou use a conversão online: https://cloudconvert.com/png-to-webp

---
Criado em: 20/01/2026
