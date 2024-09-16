import { Router } from "express";
import { ActorRoutes } from "./actors/routes";

export class AppRoutes {

    static get routes(): Router {
        
        const router = Router();


        router.use('/api/actors', ActorRoutes.routes );

        return router;
    }
}