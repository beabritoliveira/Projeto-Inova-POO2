## Ordem dos comandos:

#### Inicializando um projeto TypeScript
* ***`npm init -y`***
* ***`npm install typescript ts-node @types/node --save-dev`***

#### Inicializando o tsconfig.json
* ***`npx tsc --init`***

#### Instalando o Prisma
* ***`npm install prisma --save-dev`***

#### Estabelecendo/Executando o Prisma => cria um novo diretório Prisma
* ***`npx prisma init --datasource-provider sqlite`***

#### Criando o migrate sem que seja aplicado
* ***`npx prisma migrate dev --create-only`***

#### Aplicando a modificação da migração (feito após se alterar o schema.prisma)
* ***`npx prisma migrate dev`***
--------------------------
#### Para mandar queries para o database é necessário criar um arquivo TypeScript (script.ts) para executar as Prisma Client queries. Assim pode seguir-se dois caminhos: 
#### 1° Caso usando o new item (ni)
* ***`ni script.ts`***
  
#### 2° Caso usando o touch 
* Continuando o quickstart, na página do Prisma, no passo 4 tem o seguinte comando: ***`touch script.ts`***, porém pode ocasionar um erro, por o comando não ser reconhecido pelo windows.
  
* Para com que esse código seria compatível com o windows é necessário rodar antes o ***`npm install touch-cli -g`***.
* Porém ainda pode se ocorrer a existêcnia de outro erro, devido a execução do script ser desabilidtada no sistema. Caso isso aconteça basta *mudar a permição* com os seguintes comandos: 
* ***`Get-ExecutionPolicy`*** // aqui você vai ver qual é o status da permissão.
* ***`Set-ExecutionPolicy`*** // você vai setar uma nova permissão (como RemoteSigned)
* Por fim você rodar o comando ***`touch script.ts`***.

---------------------------------

#### Para executar o script.ts
* ***`npx ts-node script.ts`***

#### Interface Gráfica para visualizar e editar a data do banco de dados.
* ***`npx prisma studio`***
