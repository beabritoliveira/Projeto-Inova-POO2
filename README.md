## Projeto modelagem InovaWeek
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#### Alunas: Beatriz Brito Oliveira, Cecilia de Jesus Barros, Maria Luiza Souza Pinheiro, Sthefany Sobrinho Ferreira Alves
#### Professor: Otavio Lube dos Santos
#### Turma: CC4MB
#### Link para o vídeo no youtube: https://youtu.be/z-sJWieBrmU
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 ### Contextualzação / Minimundo
* O Inova Week é um projeto de inovação feito pela universidade vila velha, que tem como principal objetivo promover que os alunos vendam suas ideias criativas.
O evento acontece durante 3 dias, onde diferentes grupos apresentam no decorrer desses dias. Cada grupo deve ter um nome e ser formado por 4 alunos, sendo um deles o lider. 
Os grupos recebem o número do estande e o dia da apresentação. 
Já os alunos devem ter seu Nome, email e qual grupo ele está inserido.
As avaliações podem ser feitas tanto por alunos,com exceção do qual está participando, quanto por professores. 
A avaliação terá os seguintes critérios: modelo economico receberá até 1 ponto, viabilidade até 2 pontos, inovação até 4 pontos, implementação e prototipação até 3 pontos e por fim a apresentação até 2 pontos. Ao final do Inova Week os grupos irão receber a nota final das avaliações dadas somente pelos professores. 
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Implementação 
* Foi realizado a criação de uma modelagem de classe, sem a criação de nenhum metódo e somente de atributos inicialmente (apresentado no *`Diagrama Inovaweek.png`* , em forma de foto, e no *`t1.drawio`*, código da modelagem gerado pelo site do draw.io). 
* Dessa forma foi criado as seguintes classes: *Grupo*, *Aluno*, *Avaliação*, *Professor* e *Estande*.
* A classe Aluno_Grupo foi criada para que ligasse as tabelas do Aluno com a tabela Grupo, o que permitiria também a ampliação do projeto caso no futuro alunos possam participar de mais de um grupo, guardando assim os identificadores das respectivas classes.
* A seguir se foi realizada a implementação da modelagem na plataforma do Visual Studio Code utilizando Prisma ORM, Typescript. Fazendo a modelação das classes no *`schema.prisma`*, localizada dentro da pasta prisma.
* Além disso, houve-se a criação do arquivo *`script.ts`* com que permitiu o povoamento das classes dentro de uma função assíncrona que cria vetores que após serão instanciado dentro de um loop for. 

--------------------------
referências: https://www.prisma.io/docs/getting-started/quickstart
https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production
https://cursos.alura.com.br/forum/topico-alternativa-ao-touch-para-usuarios-de-windows-246074
https://www.npmjs.com/package/@types/express
https://ejs.co/#promo
