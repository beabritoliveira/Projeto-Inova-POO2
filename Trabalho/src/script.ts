import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const Aluno =[
      {
        id :"b33a2c74-5889-4d7d-a792-7a71304ba115",
        email: "cecilia@gmail.com",
        name: "Cecilia Barros",
      },
      {
        id :"12517af5-2e8f-4cef-a850-c182ca332d00",
        email: "beatrizbrito@gmail.com",
        name: "Beatriz Brito",
      },
      {
        id :"d91c409e-1fb6-4a17-8ab6-6a297855ef32",
        email: "arthurbuback@gmail.com",
        name: "Arthur Buback",
      },
      {
        id :"42d28177-91d1-45cb-bca4-34cb5f6ec868",
        email: "arthurdaleprani@gmail.com",
        name: "Arthur Daleprani",
      },
      {
        id :"95ccb6d2-a5d5-4348-81f2-1232afb6b50d",
        email: "marialuizapinheiro@gmail.com",
        name: "Maria Luiza Pinheiro",
      },
      {
        id :"741feb74-f447-4575-bbde-8913c7c70e5c",
        email: "sthefanysobrinho@gmail.com",
        name: "Sthefany Sobriho",
      },
      {
        id :"ff4b6946-8f4c-4b40-b92e-6a9a9e98b684",
        email: "marnesilvao@gmail.com",
        name: "Marne Silva",
      },
      {
        id :"c5f3e66b-67f4-4db0-9878-30e87dcf4d15",
        email: "carolineandrade@gmail.com",
        name: "Caroline Andrade",
      },
      {
        id :"be552e03-67a6-457c-9c01-0e90f1161df4",
        email: "caiosanches@gmail.com",
        name: "Caio Sanches",
      },
      {
        id :"0aaeb3aa-6bab-48a6-9a61-692bf17c7161",
        email: "pedrobelo@gmail.com",
        name: "Pedro Belo",
      },
      {
        id :"6f529a20-4e8c-4b71-b8a2-8b1e92287ed8",
        email: "tamirislinard@gmail.com",
        name: "Tamiris Linard",
      },
      {
        id :"74a1c81c-975f-49cd-80b9-dbbdc49e08d8",
        email: "gabrielbermond@gmail.com",
        name: "Gabriel Bermond",
      },
      {
        id :"0b790002-4f59-46e5-bfe9-ff7060ffbe15",
        email: "lucasSouza@gmail.com",
        name: "Lucas Souza",
      },
      {
        id :"1fec42b9-4524-4488-8377-68cd0b02869f",
        email: "larabrito@gmail.com",
        name: "Lara Brito",
      },
      {
        id :"b1ba57d9-5ef7-4626-ae05-43bf72091970",
        email: "gabrielaguimaraes@gmail.com",
        name: "Gabriela Guimarães"
      },
      {
        id :"0097521a-a3f2-4eb8-a041-e674121c6e9b",
        email: "anacarolinabiju@gmail.com",
        name: "Ana Carolina Biju"
      },
      {
        id :"83758138-b3f4-40a8-8012-af8240c536ef",
        email: "juliabergman@gmail.com",
        name: "Julia Bergman"
      },
      {
        id :"42ca943f-dcfc-4fe0-95bf-4014081daf50",
        email: "priciladaroit@gmail.com",
        name: "Pricila Daroit"
      },
      {
        id :"b1acaa94-dbc2-4640-aca7-a1bc018c6e13",
        email: "kisynascimento@gmail.com",
        name: "Kisy Nascimento"
      },
      {
        id :"0cdd8c01-f268-4e97-a052-97d6377fcd7a",
        email: "rosamariamontibeller@gmail.com",
        name: "Rosamaria Montibeller"
      },
    ]
    for(const data of Aluno){
        const aluno = await prisma.aluno.create({
            data: data,
        });
        console.log(aluno);
    }

    const Professor = [
      {
        email: "otaviolube@gmail.com",
        name: "Otavio Lube",
      },
      {
        email: "sauloribeiro@gmail.com",
        name: "Saulo Ribeiro",
      },
      {
        email: "cassiocapucho@gmail.com",
        name: "Cassio Capucho",
      },
      {
        email: "celsosoprani@gmail.com",
        name: "Celso Soprani",
      },
      {
        email: "jean-remi@gmail.com",
        name: "Jean-Rémi Bourguet",
      },
      {
        email: "gabrielalubke@gmail.com",
        name: "Gabriela Lubke",
      },
      {
        email: "marcelocamponez@gmail.com",
        name: "Marcelo Camponez",
      },
      {
        email: "viniciusmotta@gmail.com",
        name: "Vinicius Motta",
      },
      {
        email: "lucianabahiense@gmail.com",
        name: "Luciana Bahiense",
      },
      {
        email: "viniciusrosalen@gmail.com",
        name: "Vinicius Rosalen",
      },
      {
        email: "alessandrobertolani@gmail.com",
        name: "Alessandro Bertolani",
      },
      {
        email: "felipecoelho@gmail.com",
        name: "Felipe Coelho",
      },
      {
        email: "abrantesaraujo@gmail.com",
        name: "Abrantes Araujo",
      },
      {
        email: "denisrodrigues@gmail.com",
        name: "Denis Rodrigues",
      },
      {
        email: "susileaabreu@gmail.com",
        name: "Susiléa Abreu",
      },
      {
        email: "erlonpinheiro@gmail.com",
        name: "Erlon Pinheiro",
      },
      {
        email: "carlosathico@gmail.com",
        name: "Carlos Athico",
      },
    ]
    for(const data of Professor){
        const professor = await prisma.professor.create({
            data: data,
        });
        console.log(professor);
    }
    
    // 1990-04-15T14:30:00-01:00
    const Grupo = [
    {
    id : "058ae67c-1aa5-4dc0-ae93-8e4ee755ddc2",
    name: "Refugee Care",
    lider_id: "42d28177-91d1-45cb-bca4-34cb5f6ec868",
    dataHora : "2023-09-12T08:00:00-01:00",
    },
    {
    id : "3fcee9a3-04b1-402b-b777-710e42ba3b7b",
    name: "Patinhas Solidárias",
    lider_id: "b1acaa94-dbc2-4640-aca7-a1bc018c6e13",
    dataHora : "2023-09-13T08:00:00-01:00",
    },
    {
    id: "69fe611c-a594-490a-b40e-63ca845e9b44",
    name: "White Horse",
    lider_id: "0cdd8c01-f268-4e97-a052-97d6377fcd7a",
    dataHora : "2023-09-14T08:00:00-01:00",
    },
    {
    id: "eb03e496-0494-4666-aa1a-6df47a7e3ea1",
    name: "Hope Harbor",
    lider_id: "ff4b6946-8f4c-4b40-b92e-6a9a9e98b684",
    dataHora : "2023-09-12T08:00:00-01:00",
    },
  ]
    for(const data of Grupo){
        const grupo = await prisma.grupo.create({
            data: data,
        });
        console.log(grupo);
    }

   const Atribuindo_Alunos = [
        {
            idAluno : "0cdd8c01-f268-4e97-a052-97d6377fcd7a",
            idGrupo: "058ae67c-1aa5-4dc0-ae93-8e4ee755ddc2"
        },
        {
            idAluno : "b33a2c74-5889-4d7d-a792-7a71304ba115",
            idGrupo: "058ae67c-1aa5-4dc0-ae93-8e4ee755ddc2"
        },
        {
            idAluno : "12517af5-2e8f-4cef-a850-c182ca332d00",
            idGrupo: "058ae67c-1aa5-4dc0-ae93-8e4ee755ddc2"
        },
        {
            idAluno : "d91c409e-1fb6-4a17-8ab6-6a297855ef32",
            idGrupo: "058ae67c-1aa5-4dc0-ae93-8e4ee755ddc2"
        },

        {
            idAluno : "42d28177-91d1-45cb-bca4-34cb5f6ec868",
            idGrupo: "3fcee9a3-04b1-402b-b777-710e42ba3b7b"
        },
        {
            idAluno : "95ccb6d2-a5d5-4348-81f2-1232afb6b50d",
            idGrupo: "3fcee9a3-04b1-402b-b777-710e42ba3b7b"
        },
        {
            idAluno : "741feb74-f447-4575-bbde-8913c7c70e5c",
            idGrupo: "3fcee9a3-04b1-402b-b777-710e42ba3b7b"
        },
        {
            idAluno : "c5f3e66b-67f4-4db0-9878-30e87dcf4d15",
            idGrupo: "3fcee9a3-04b1-402b-b777-710e42ba3b7b"
        },

        {
            idAluno : "b1acaa94-dbc2-4640-aca7-a1bc018c6e13",
            idGrupo: "69fe611c-a594-490a-b40e-63ca845e9b44"
        },
        {
            idAluno : "be552e03-67a6-457c-9c01-0e90f1161df4",
            idGrupo: "69fe611c-a594-490a-b40e-63ca845e9b44"
        },
        {
            idAluno : "0aaeb3aa-6bab-48a6-9a61-692bf17c7161",
            idGrupo: "69fe611c-a594-490a-b40e-63ca845e9b44"
        },
        {
            idAluno : "6f529a20-4e8c-4b71-b8a2-8b1e92287ed8",
            idGrupo: "69fe611c-a594-490a-b40e-63ca845e9b44"
        },
        
        {
            idAluno : "ff4b6946-8f4c-4b40-b92e-6a9a9e98b684",
            idGrupo: "eb03e496-0494-4666-aa1a-6df47a7e3ea1"
        },
        {
            idAluno : "74a1c81c-975f-49cd-80b9-dbbdc49e08d8",
            idGrupo: "eb03e496-0494-4666-aa1a-6df47a7e3ea1"
        },
        {
            idAluno : "0b790002-4f59-46e5-bfe9-ff7060ffbe15",
            idGrupo: "eb03e496-0494-4666-aa1a-6df47a7e3ea1"
        },
        {
            idAluno : "1fec42b9-4524-4488-8377-68cd0b02869f",
            idGrupo: "eb03e496-0494-4666-aa1a-6df47a7e3ea1"
        },
    ]
    for(const data of Atribuindo_Alunos){
        const aluno = await prisma.alunoGrupo.create({
            data: data,
        });
        console.log(aluno);
    }

  const Estande =[
{//"Refugee Care"
  id_grupo: "058ae67c-1aa5-4dc0-ae93-8e4ee755ddc2",
  dataHora: "2023-09-12T08:00:00-01:00",

},
{//"Patinhas Solidárias"
  id_grupo:"3fcee9a3-04b1-402b-b777-710e42ba3b7b",
  dataHora: "2023-09-13T08:00:00-01:00"
},
{//"White Horse"
  id_grupo:"69fe611c-a594-490a-b40e-63ca845e9b44",
  dataHora: "2023-09-14T08:00:00-01:00"
},
{//"Hope Harbor"
  id_grupo: "eb03e496-0494-4666-aa1a-6df47a7e3ea1",
  dataHora: "2023-09-12T08:00:00-01:00"

},
]

for(const data of Estande){
const estande = await prisma.estande.create({
data: data,
});

console.log(estande);
}

  const Avaliacao =[
{
  avaliador: "Otavio Lube",
  nota: 2.0,
  id_grupo: "058ae67c-1aa5-4dc0-ae93-8e4ee755ddc2"
  //"Refugee Care"
},
{
  avaliador: "Cassio Capucho",
  nota: 1.8,
  id_grupo:"3fcee9a3-04b1-402b-b777-710e42ba3b7b"
  //"Patinhas Solidárias"
},
{
   avaliador: "Celso Soprani",
   nota: 1.5,
   id_grupo: "69fe611c-a594-490a-b40e-63ca845e9b44"
   //"White Horse"
},
{
   avaliador: "Gabriela Lubke",
   nota: 2.0,
   id_grupo: "eb03e496-0494-4666-aa1a-6df47a7e3ea1"
   //"Hope Harbor"
},
]

for(const data of Avaliacao){
    const avaliacao = await prisma.avaliacao.create({
    data: data,
});
console.log(avaliacao);
}
  
}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })