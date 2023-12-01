import { Router } from "express";
import ProfessorController from "../controller/ProfessorController";

const ProfessorRouter = Router();

ProfessorRouter.get('/professores', ProfessorController.listProfessor);

export default ProfessorRouter;