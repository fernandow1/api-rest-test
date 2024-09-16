
import { Request, Response } from "express";
import { ActorRepository } from "../../domain/repository/actor.repository";

export class ActorsController {

    constructor(
        private readonly repository: ActorRepository,
    ) {}

    public getActors = async (req: Request, res: Response) => {
        const actors = await this.repository.getAll();
        return res.json(actors);
    }
}

