import { Prisma, PrismaClient } from '@prisma/client';
import 'express'

const prisma = new PrismaClient();

class EstandeServices {
    constructor(){

    }

    async listEstande(id?: string){
        try{
            if(id){
                const estande = await prisma.estande.findUnique({
                    where: {
                        id
                    }
                });
                return estande
            }else{
                const estandes = await prisma.estande.findMany();
                return estandes
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createEstande(estande: Prisma.EstandeCreateInput){
        try{
            const newEstande = await prisma.estande.create({
                data: estande
            });
            return newEstande;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateEstande(id: string, estande: Prisma.EstandeCreateInput){
        try{
            const updateEstande = await prisma.estande.update({
                where: {
                    id
                },
                data: estande
            });

            return updateEstande;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteEstande(id: string){
        try{
            const deleteEstande = await prisma.estande.delete({
                where: {
                    id
                }
            });

            return deleteEstande
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new EstandeServices()