## Projeto modelagem InovaWeek
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#### Alunas: Beatriz Brito Oliveira, Cecilia de Jesus Barros, Maria Luiza Souza Pinheiro, Sthefany Sobrinho Ferreira Alves
#### Professor: Otavio Lube dos Santos
#### Turma: CC4MB
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
* Foi realizado a criação de uma modelagem de classe, sem a criação de nenhum metódo e somente de atributos inicialmente (apresentado no *`Diagrama Inovaweek.png`* , em forma de foto, e no *`t1.drawio`*, código da modelagem gerado pelo site do draw.io). Tomando como base o texto:
* "Um berçário deseja informatizar suas operações. Quando um bebê nasce, algumas informações são armazenadas sobre ele, tais como: nome, data do nascimento, peso do nascimento, altura, a mãe deste bebê e o médico que fez seu parto. Para as mães, o berçário também deseja manter um controle, guardando informações como: nome, endereço, telefone e data de nascimento. Para os médicos, é importante saber: CRM, nome, telefone celular e especialidade."
* Dessa forma foi criado as seguintes classes: *Grupo*, *Aluno*, *Avaliação*, *Professor* e *Estande*.
* A classe Aluno_Grupo foi criada para que ligasse as tabelas do Aluno com a tabela Grupo, o que permitiria também a ampliação do projeto caso no futuro alunos possam participar de mais de um grupo,

--------------------------
referências: https://www.prisma.io/docs/getting-started/quickstart
https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production
https://cursos.alura.com.br/forum/topico-alternativa-ao-touch-para-usuarios-de-windows-246074
