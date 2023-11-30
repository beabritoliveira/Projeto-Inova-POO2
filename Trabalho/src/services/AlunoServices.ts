import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AlunoServices {
    constructor(){

    }

    async listAluno(id?: string){
        try{
            if(id){
                const aluno = await prisma.aluno.findUnique({
                    where: {
                        id
                    }
                });
                return aluno
            }else{
                const maes = await prisma.aluno.findMany();
                return maes
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createAluno(aluno: Prisma.AlunoCreateInput){
        try{
            const newAluno = await prisma.aluno.create({
                data: aluno
            });
            return newAluno;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateAluno(id: string, aluno: Prisma.AlunoCreateInput){
        try{
            const updateAluno = await prisma.aluno.update({
                where: {
                    id
                },
                data: aluno
            });

            return updateAluno;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteAluno(id: string){
        try{
            const deleteAluno = await prisma.aluno.delete({
                where: {
                    id
                }
            });

            return deleteAluno
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new AlunoServices()