import { Router } from "express";
import AlunoController from "../controller/AlunoController";

const AlunoRouter = Router();

AlunoRouter.get('/aluno', AlunoController.listAluno);

export default AlunoRouter;