import { ActorDataSource } from "../../domain/datasources/actor.datasource";
import { ActorEntity } from "../../domain/entities/actor.entity";
import { ActorRepository } from "../../domain/repository/actor.repository";

export class ActorRepositoryImpl implements ActorRepository {
    constructor(
        private readonly datasource: ActorDataSource
    ) {}

    getAll(): Promise<ActorEntity[]> {
        return this.datasource.getAll();
    }
}