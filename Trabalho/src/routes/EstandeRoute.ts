import { Router } from "express";
import EstandeController from "../controller/EstandeController";

const EstandeRouter = Router();

EstandeRouter.get('/estandes', EstandeController.listEstande);

export default EstandeRouter;