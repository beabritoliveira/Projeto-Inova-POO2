import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import AlunoServices from "../services/AlunoServices";

class AlunoController {
    constructor(){}

    async createAluno(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        
        if(dados.name !== "" && dados.email !== ""){
            const newAluno = await AlunoServices.createAluno(dados)
            res.status(200).json({
                status: 'ok',
                newAluno: newAluno
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listAluno(req: Request, res: Response){
        const alunos = AlunoServices.listAluno()

        res.render('home', {alunos: alunos})
    }

    async updateAluno(req: Request, res: Response){
        res.send('Update aluno');
    }

    async deleteAluno(req: Request, res: Response){
        res.send('Delete aluno');
    }
}

export default new AlunoController()