import { ActorEntity } from "../entities/actor.entity";

export abstract class ActorRepository {
    abstract getAll(): Promise<ActorEntity[]>;
}