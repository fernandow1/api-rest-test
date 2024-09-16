import { ActorEntity } from "../entities/actor.entity";

export abstract class ActorDataSource {    
    abstract getAll(): Promise<ActorEntity[]>;
}