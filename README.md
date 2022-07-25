
# Desafio XP | Front-End

# Contexto
Meu nome é Pablo Vasconcelos Rios e este é o desafio que desenvolvi para processo seletivo da XPinc.
Por motivos pessoais, tive apenas dois dias de qualidade para desenvolver a aplicação, por conta desta limitação eu decide por fazer uma aplicação parcialmente estática sem persistência com intuíto de apresentar os conhecimentos que adquiri no curso da Trybe. Este é um projeto desenvolvido em React e sua estilização está parcialmente feita, o que pode dificultar um pouco a visualização.

## Contatos

Este é meu Github: https://github.com/pablovr1000
Email: pablovr200@hotmail.com

## Desafios Enfrentados e descrição das Telas desenvolvidas

Em função do tempo, não consegui revisar todos os conteúdos que gostaria para desenvolver o desafio, então fui construindo os elementos com base nos requisitos solicitados e propostos no desafio

>Tela de Login **(Completamente funcional)**

Aqui eu desenvolvi uma tela com **três campos** a serem digitados, **nome completo, email e uma senha** além de **um botão** para efetuar login que só será **habilitado caso o e-mail seja válido e a senha possua no mínimo 6 caracteres**, ao efetuar login os dados são persistidos no **localStorage**

>Tela com lista de ativos (ações) e sugestões de ativos (ações) **(Parcialmente funcional)**

rota /ativos
Aqui eu desenvolvi uma **base de dados** bem simples de um **array com 11 objetos** (Ações, dados do último pregão do dia 22/07/2022), logo ao fazer login o usuário irá receber um **saldo inicial de R$ 5.000,00** e **5 ações da AZUL4** e aqui poderá visualizar sua carteira de ativos e também uma sequência de sugestões de ativos a serem adquiridos, botões para acessar tela de Compra ou Venda de ações. Além disso há também aqui **um botão** para acessar a tela de **Depósito e Saque**. 
(acesso a está rota permitida apenas se tiver efetuado login e os dados estiver no localStorage)

>Tela de Depósito e Saque numa conta digital **(Completamente funcional)**

rota /motimentacao
Aqui eu desenvolvi uma tela com um **campo para digital um valor** e dois botões para Depositar o valor digitado ou Retirar o valor digitado, além de um botão para retornar a tela de Ativos
(acesso a está rota permitida apenas se tiver efetuado login e os dados estiver no localStorage)
 
>Tela de Compra/Venda de ações **(Parcialmente funcional)**

rota /ativos
Aqui eu desenvolvi uma tela que exibe as informações da ação clicada para negociar (Venda ou Compra),  um campo para digitar a quantidade de ações a serem negociadas e o preço (infelizmente não tive tempo hábil para completar a função de compra e venda e por conta disso a tela está apenas parcialmente funcional).
(acesso a está rota permitida apenas se tiver efetuado login e os dados estiver no localStorage)


## Técnologias usadas

Front-end:
> Desenvolvido usando: React, Context, CSS3, HTML5,  ES6

### Clonando Projeto
```
git clone git@github.com:pablovr1000/desafio-xp-app.git
``` 
### Instalando Dependências
```
cd desafio-xp-app
npm install
``` 
### Executando aplicação
* Para rodar o projeto:

```
npm start
``` 
