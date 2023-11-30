import { Router } from "express";
import ProfessorController from "../controller/ProfessorController";

const ProfessorRouter = Router();

ProfessorRouter.get('/professor', ProfessorController.listProfessor);

export default ProfessorRouter;