import { Router } from "express";
import GrupoController from "../controller/GrupoController";

const GrupoRouter = Router();

GrupoRouter.get('/grupo', GrupoController.listGrupo);

export default GrupoRouter;