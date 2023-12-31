import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import EstandeServices from "../services/EstandeServices";

class EstandeController {
    constructor(){}

    async createEstande(req: Request, res: Response){
        const dados: Prisma.EstandeCreateInput = req.body;
        
        if(dados.dataHora !== "" && dados.grupo !== null){
            const newEstande = await EstandeServices.createEstande(dados)
            res.status(200).json({
                status: 'ok',
                newAluno: newEstande
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listEstande(req: Request, res: Response){ 
        const estande = await EstandeServices.listEstande()
        if(estande != null){
            res.render('estandes', {estande: estande})
        }
        
    }

    async updateEstande(req: Request, res: Response){
        res.send('Update estande');
    }

    async deleteEstande(req: Request, res: Response){
        res.send('Delete estande');
    }
}

export default new EstandeController()