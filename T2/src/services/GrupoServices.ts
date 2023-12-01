import { Prisma, PrismaClient } from '@prisma/client';
import 'express'
const prisma = new PrismaClient();

class GrupoServices {
    constructor(){

    }

    async listGrupo(id?: string){
        try{
            if(id){
                const grupo = await prisma.grupo.findUnique({
                    where: {
                        id
                    }
                });
                return grupo
            }else{
                const grupos = await prisma.grupo.findMany();
                return grupos
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createGrupo(grupo: Prisma.GrupoCreateInput){
        try{
            const newGrupo = await prisma.grupo.create({
                data: grupo
            });
            return newGrupo;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateGrupo(id: string, grupo: Prisma.GrupoCreateInput){
        try{
            const updateGrupo = await prisma.grupo.update({
                where: {
                    id
                },
                data: grupo
            });

            return updateGrupo;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteGrupo(id: string){
        try{
            const deleteGrupo = await prisma.grupo.delete({
                where: {
                    id
                }
            });

            return deleteGrupo
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new GrupoServices()