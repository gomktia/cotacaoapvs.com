# Execution

Esta pasta contém os **scripts Python determinísticos** que fazem o trabalho.

## Propósito

Scripts de execução são ferramentas confiáveis e testáveis que:
- Fazem chamadas de API
- Processam dados
- Manipulam arquivos
- Interagem com bancos de dados
- Realizam operações determinísticas

## Princípios

- **Determinístico**: Mesmos inputs = mesmos outputs
- **Bem comentado**: Código claro e documentado
- **Tratamento de erros**: Mensagens claras e úteis
- **Testável**: Fácil de testar isoladamente
- **Rápido**: Otimizado para performance

## Variáveis de Ambiente

Use o arquivo `.env` na raiz do projeto para:
- API tokens
- Credenciais
- Configurações sensíveis

Exemplo `.env`:
```
GOOGLE_API_KEY=sua_chave_aqui
DATABASE_URL=postgresql://...
```

## Estrutura de Script Recomendada

```python
#!/usr/bin/env python3
"""
Descrição breve do que o script faz
"""

import os
from dotenv import load_dotenv

load_dotenv()

def main():
    """Função principal"""
    # Seu código aqui
    pass

if __name__ == "__main__":
    main()
```

## Dependências

Instale dependências com:
```bash
pip install -r requirements.txt
```
