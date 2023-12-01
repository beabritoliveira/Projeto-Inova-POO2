import { Prisma, PrismaClient } from '@prisma/client';
import 'express'

const prisma = new PrismaClient();

class AvaliacaoServices {
    constructor(){

    }

    async listAvaliacao(id?: string){
        try{
            if(id){
                const avaliacao = await prisma.avaliacao.findUnique({
                    where: {
                        id
                    }
                });
                return avaliacao
            }else{
                const avaliacoes = await prisma.avaliacao.findMany();
                return avaliacoes
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createAvaliacao(avaliacao: Prisma.AvaliacaoCreateInput){
        try{
            const newAvaliacao = await prisma.avaliacao.create({
                data: avaliacao
            });
            return newAvaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateAvaliacao(id: string, avaliacao: Prisma.AvaliacaoCreateInput){
        try{
            const updateAvaliacao = await prisma.avaliacao.update({
                where: {
                    id
                },
                data: avaliacao
            });

            return updateAvaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteAvaliacao(id: string){
        try{
            const deleteAvaliacao = await prisma.avaliacao.delete({
                where: {
                    id
                }
            });

            return deleteAvaliacao
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new AvaliacaoServices()