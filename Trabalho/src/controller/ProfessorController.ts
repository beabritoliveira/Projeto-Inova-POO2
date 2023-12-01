import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ProfessorServices from "../services/ProfessorServices";

class ProfessorController {
    constructor(){}

    async createProfessor(req: Request, res: Response){
        const dados: Prisma.ProfessorCreateInput = req.body;
        
        if(dados.name !== "" && dados.email !== null){
            const newProfessor = await ProfessorServices.createProfessor(dados)
            res.status(200).json({
                status: 'ok',
                newAluno: newProfessor
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listProfessor(req: Request, res: Response){
        const grupo = ProfessorServices.listProfessor()
        res.render('home', {grupo: grupo})
    }

    async updateProfessor(req: Request, res: Response){
        const professor = ProfessorServices.updateProfessor
        res.render('Delete professor', {professor: professor});
    }

    async deleteProfessor(req: Request, res: Response){
        const professor = ProfessorServices.deleteProfessor
        res.render('Delete professor', {professor: professor});
    }
}

export default new ProfessorController()