import { Router } from "express";
import GrupoController from "../controller/AvaliacaoController";

const GrupoRouter = Router();

GrupoRouter.get('/grupo', GrupoController.listAvaliacao);

export default GrupoRouter;