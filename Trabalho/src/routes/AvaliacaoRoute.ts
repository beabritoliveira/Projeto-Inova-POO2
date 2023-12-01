import { Router } from "express";
import AvaliacaoController from "../controller/AvaliacaoController";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacoes', AvaliacaoController.listAvaliacao);

export default AvaliacaoRouter;