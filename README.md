# Calculadora de Média de Atletas

Esta aplicação em JavaScript recebe uma matriz de objetos contendo o nome de atletas e suas cinco notas atribuídas por diferentes juízes. O sistema calcula a média das notas, desconsiderando a maior e a menor nota de cada atleta, e exibe o nome do atleta, as notas recebidas, e a média calculada.

## Funcionalidades

- Recebe uma lista de atletas, onde cada atleta possui um nome e cinco notas.
- Ordena as notas em ordem crescente.
- Remove a maior e a menor nota.
- Calcula a média com as três notas restantes.
- Exibe o nome do atleta, as notas obtidas e a média final ao usuário.

## Como Executar

1. Certifique-se de que tem o [Node.js](https://nodejs.org) instalado em sua máquina.
2. Clone este repositório ou copie o código-fonte.
3. Salve o arquivo com o código da aplicação, por exemplo, `calcularMediaAtletas.js`.
4. No terminal, navegue até o diretório onde o arquivo está salvo.
5. Execute o comando:

   ```bash
   node calcularMediaAtletas.js

6. O terminal exibirá o nome dos atletas, suas notas em ordem crescente e a média válida calculada.

## Exemplo de Saída

``` javascript
Atleta: Cesar Abascal
Notas Obtidas: 7.88, 8.42, 9.34, 10, 10
Média Válida: 9.25

Atleta: Fernando Puntel
Notas Obtidas: 7, 8, 9.33, 10, 10
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7, 8, 9.5, 9.5, 10
Média Válida: 9.00

Atleta: Bruno Castro
Notas Obtidas: 9, 9.5, 10, 10, 10
Média Válida: 9.83
```
## Estrutura do Código

- A classe CalcularMediaAtletas recebe uma lista de atletas no construtor.
- O método calcularMedia() itera sobre cada atleta, ordena suas notas, remove a maior e a menor, e calcula a média com as três notas centrais.
- O resultado final é exibido no console.

## Tecnologias Utilizadas

- JavaScript (Node.js)

##
Este é um projeto simples que demonstra o uso de métodos de ordenação, manipulação de arrays, e cálculos básicos para resolver um problema prático de análise de notas de atletas.
Este projeto faz parte da certificação de módulo do curso **DevStart** do SENAI.
