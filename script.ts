import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const Aluno =[
      {
        email: "cecilia@gmail.com",
        name: "Cecilia Barros",
      },
      {
        email: "beatrizbrito@gmail.com",
        name: "Beatriz Brito",
      },
      {
        email: "arthurbuback@gmail.com",
        name: "Arthur Buback",
      },
      {
        email: "arthurdaleprani@gmail.com",
        name: "Arthur Daleprani",
      },
      {
        email: "marialuizapinheiro@gmail.com",
        name: "Maria Luiza Pinheiro",
      },
      {
        email: "sthefanysobrinho@gmail.com",
        name: "Sthefany Sobriho",
      },
      {
        email: "marnesilvao@gmail.com",
        name: "Marne Silva",
      },
      {
        email: "carolineandrade@gmail.com",
        name: "Caroline Andrade",
      },
      {
        email: "caiosanches@gmail.com",
        name: "Caio Sanches",
      },
      {
        email: "pedrobelo@gmail.com",
        name: "Pedro Belo",
      },
      {
        email: "tamirislinard@gmail.com",
        name: "Tamiris Linard",
      },
      {
        email: "gabrielbermond@gmail.com",
        name: "Gabriel Bermond",
      },
      {
        email: "lucasSouza@gmail.com",
        name: "Lucas Souza",
      },
      {
        email: "larabrito@gmail.com",
        name: "Lara Brito",
      },
      {
        email: "gabrielaguimaraes@gmail.com",
        name: "Gabriela Guimarães"
      },
      {
        email: "anacarolinabiju@gmail.com",
        name: "Ana Carolina Biju"
      },
      {
        email: "juliabergman@gmail.com",
        name: "Julia Bergman"
      },
      {
        email: "priciladaroit@gmail.com",
        name: "Pricila Daroit"
      },
      {
        email: "kisynascimento@gmail.com",
        name: "Kisy Nascimento"
      },
      {
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
