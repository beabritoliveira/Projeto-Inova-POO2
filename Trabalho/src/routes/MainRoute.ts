import { Router } from "express";
import MainController from "../controller/MainController";

const MainRouter = Router();

MainRouter.get('/', MainController.renderMainPage);

export default MainRouter;