import { Router } from "express";
import AvaliacaoController from "../controller/AvaliacaoController";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacao', AvaliacaoController.listAvaliacao);

export default AvaliacaoRouter;