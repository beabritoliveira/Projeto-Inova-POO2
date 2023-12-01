import { PrismaClient } from '@prisma/client'
import AvaliacaoServices from './services/AvaliacaoServices'
import AvaliacaoController from './controller/AvaliacaoController';
import EstandeServices from './services/EstandeServices';
import EstandeController from './controller/EstandeController';

const prisma = new PrismaClient()

async function main() {
  //AvaliacaoController.listAvaliacao;
  //const alunos = await EstandeServices.listEstande();
  //console.log(alunos);
  EstandeController.listEstande;
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