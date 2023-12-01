import { Prisma, PrismaClient } from '@prisma/client';
import 'express'
const prisma = new PrismaClient();

class ProfessorServices {
    constructor(){

    }

    async listProfessor(id?: string){
        try{
            if(id){
                const professor = await prisma.professor.findUnique({
                    where: {
                        id
                    }
                });
                return professor
            }else{
                const professores = await prisma.professor.findMany();
                return professores
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createProfessor(professor: Prisma.ProfessorCreateInput){
        try{
            const newProfessor = await prisma.professor.create({
                data: professor
            });
            return newProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateProfessor(id: string, professor: Prisma.ProfessorCreateInput){
        try{
            const updateProfessor = await prisma.professor.update({
                where: {
                    id
                },
                data: professor
            });

            return updateProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteProfessor(id: string){
        try{
            const deleteProfessor = await prisma.professor.delete({
                where: {
                    id
                }
            });

            return deleteProfessor
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new ProfessorServices()