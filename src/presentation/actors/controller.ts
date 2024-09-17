
import { Request, Response } from "express";
import { ActorRepository } from "../../domain/repository/actor.repository";
import { GetActors } from "../../domain/uses-cases/actor/get-actors";

export class ActorsController {

    constructor(
        private readonly repository: ActorRepository,
    ) {}

    public getActors = async (req: Request, res: Response) => {
        new GetActors( this.repository )
        .execute()
        .then( actors => res.json(actors) )
        .catch( error => res.status(400).json({ error }) );
    }
}

