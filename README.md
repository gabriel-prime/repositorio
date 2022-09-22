﻿**Essa é uma API teste de gestão de amizades e cada pasta tem seus arquivos funcionais de acordo com seu nome. Vamos à elas:**
=======================================================================================================================
* Pasta **router**: temos os arquivos que possui todas as rotas que correspondem a cada uma das tabelas no banco de dados. Por exemplo: o arquivo *userRoute.js* têm todas as rotas correspondentes às funções de controle da tabela *users*.
    
* Pasta **controllers**: temos os arquivos que possui todas as funcões de alteração/controle das tabelas. Por exemplo: o arquivo *FriendController* têm todas as funções que fazem alterações na tabela *friends*.
    
* Pasta **models**: temos todos os arquivos que são modelos para a criação de tabelas. Por exemplo: o arquivo *friend.js* é o modelo que ficará a tabela no banco de dados *cadastros*.

* Pasta **migrations**: temos todos os arquivos de alteração por migrations da base de dados. Por exemplo: o arquivo *20220428194507-melhoramigo* é uma alteração que adiciona a coluna *melhoramigo* (BOOLEANO) na tabela *friends* do banco de dados *cadastros*.

**Para rodar o servidor:**
-----------------------------------------------------------------------------------------------------------------------
* Para rodar o servidor é necessário, primeiramente, ir no terminal e rodar o comando **npm install** para instalar todas as *dependências*.

* Depois será necessário rodar o comando **nodemon.js** para iniciar o servidor.
