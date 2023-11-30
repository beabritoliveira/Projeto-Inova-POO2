import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import AvaliacaoServices from "../services/AvaliacaoServices";

class AvaliacaoController {
    constructor(){}

    async createAvaliacao(req: Request, res: Response){
        const dados: Prisma.AvaliacaoCreateInput = req.body;
        
        if(dados.avaliador !== "" && dados.nota !== null && dados.grupo !== null){
            const newAvaliacao = await AvaliacaoServices.createAvaliacao(dados)
            res.status(200).json({
                status: 'ok',
                newAluno: newAvaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listAvaliacao(req: Request, res: Response){
        const avaliacao = AvaliacaoServices.listAvaliacao

        res.render('home', {avaliacao: avaliacao})
    }

    async updateAvaliacao(req: Request, res: Response){
        res.send('Update avaliacao');
    }

    async deleteAvaliacao(req: Request, res: Response){
        res.send('Delete avaliacao');
    }
}

export default new AvaliacaoController()