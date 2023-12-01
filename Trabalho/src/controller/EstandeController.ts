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
        const estande = EstandeServices.listEstande()
        res.render('home', {estande: estande})
    }

    async updateEstande(req: Request, res: Response){
        const estande = EstandeServices.updateEstande
        res.render('Update estande', {estande: estande});
    }

    async deleteEstande(req: Request, res: Response){
        const estande = EstandeServices.deleteEstande
        res.render('Delete estande', {estande: estande});
    }
}

export default new EstandeController()