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
