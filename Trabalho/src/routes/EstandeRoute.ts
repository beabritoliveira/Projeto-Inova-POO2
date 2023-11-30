import { Router } from "express";
import EstandeController from "../controller/EstandeController";

const EstandeRouter = Router();

EstandeRouter.get('/estande', EstandeController.listEstande);

export default EstandeRouter;