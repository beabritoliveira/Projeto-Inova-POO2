import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import GrupoServices from "../services/GrupoServices";

class GrupoController {
    constructor(){}

    async createGrupo(req: Request, res: Response){
        const dados: Prisma.GrupoCreateInput = req.body;
        
        if(dados.name !== "" && dados.lider !== null && dados.integrantes){
            const newGrupo = await GrupoServices.createGrupo(dados)
            res.status(200).json({
                status: 'ok',
                newAluno: newGrupo
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listGrupo(req: Request, res: Response){
        const grupo = GrupoServices.listGrupo()

        res.render('grupos', {grupo: grupo})
    }

    async updateGrupo(req: Request, res: Response){
        res.send('Update grupo');
    }

    async deleteGrupo(req: Request, res: Response){
        res.send('Delete grupo');
    }
}

export default new GrupoController()
