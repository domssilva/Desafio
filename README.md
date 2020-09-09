# Setup

* Implementação do algoritmo se encontra em [src/utils/functions.ts](https://github.com/domssilva/Desafio/blob/9dbccde71336cc05b77e6c297f9d009657feca1b/src/utils/functions.ts#L3)

```bash
# 0. Clonar repo
  git clone https://github.com/domssilva/Desafio.git

# 1. Instalar dependências
  cd Desafio/
  npm install

# 2. Transpilar Typescript para Javascript
  npm run build

# 3. Executar testes
  npm test
```

### Tools/Tecnologias usadas
- Typescript
- Eslint\padrão airbnb
- Jest
- Npm

# Desafio 
Escrever uma função que receba um valor monetário e retorne uma string com o número por extenso.

### Exemplos: 
- R$ 10,00 = "Dez reais"
- R$ 25,32 = "Vinte e cinco reais e trinta e dois centavos"
- R$ 1.200,00 = "Mil e duzentos reais"

### Requisitos: 
- JS

Liberdade total para usarem o que quiserem, JS vannila, testes, TS, babel etc.....

**Prazo: 11/09/2020**

# Solução

  1. remover sinais do input
  2. armazenar valor em um vetor com 2 campos; o primeiro para unidades e o segundo para valores decimais
  3. aplicar algoritmo de conversão de número para extenso nos 2 campos do vetor
  4. unir resultado em uma única string, com no final "real/reais"
  5. retornar como output a string

Algoritmo de conversão: 
  1. Detectar unidades presentes no valor
  2. Se os numeros forem os casos unicos ( 11 >= numero <= 19), utilizar matriz uniqueCases
  3. Se não, utilizar indices da matriz padrão contendo nomeclaturas das unidades

```js
Matriz = {
  0: unidades,
  1: centenas,
  2: dezenas,
};
```