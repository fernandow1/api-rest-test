import { Router } from "express";
import { ActorsController } from "./controller";
import { ActorDataSourceImpl } from "../../infraestructure/datasource/actor.datasource.impl";
import { ActorRepositoryImpl } from "../../infraestructure/repositories/actor.repository.impl";

export class ActorRoutes {

    static get routes(): Router {
        
        const router = Router();

        const datasource = new ActorDataSourceImpl();

        const actorRepository = new ActorRepositoryImpl( datasource );
        
        const actorController = new ActorsController(actorRepository);                

        router.get('/', actorController.getActors);

        return router;
    }
}