import { Router } from "express";
import Create from "./Create";
import Get from "./Get";
import Profile from "./Profile";
import AuthVerification from "../../../middlewares/AuthVerification";

const methodsRoutes = Router();

methodsRoutes.post("/user", Create);
methodsRoutes.get("/user", Get);
methodsRoutes.get("/user/profile", AuthVerification, Profile);

export default methodsRoutes;
