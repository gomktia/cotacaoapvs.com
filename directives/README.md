# Directives

Esta pasta contém as **diretivas** (SOPs em Markdown) que definem o que fazer.

## Propósito

Diretivas são instruções em linguagem natural que descrevem:
- **Objetivos**: O que precisa ser alcançado
- **Inputs**: Quais dados são necessários
- **Ferramentas/Scripts**: Quais scripts da pasta `execution/` usar
- **Outputs**: O que será gerado
- **Edge Cases**: Situações especiais e como lidar com elas

## Formato

Cada diretiva deve ser um arquivo Markdown (`.md`) com:
1. Título claro
2. Descrição do objetivo
3. Inputs esperados
4. Scripts a serem executados
5. Outputs esperados
6. Tratamento de erros e edge cases

## Exemplo

```markdown
# Scrape Website

**Objetivo**: Extrair dados de um website específico

**Inputs**: 
- URL do site
- Seletores CSS para os dados desejados

**Script**: `execution/scrape_single_site.py`

**Outputs**: 
- Arquivo JSON em `.tmp/` com os dados extraídos

**Edge Cases**:
- Rate limiting: aguardar 2s entre requisições
- Site offline: tentar 3 vezes com backoff exponencial
```

## Princípios

- Diretivas são **documentos vivos** - atualize conforme aprende
- Nunca sobrescreva sem permissão
- Adicione learnings de erros encontrados
