import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const Aluno =[
        {
            email: "cecilia@gmail.com",
            name: "Cecilia"
        }
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
