import { ActorEntity } from "../../entities/actor.entity";
import { ActorRepository } from "../../repository/actor.repository";

export interface GetActorsUseCase {
    execute(): Promise<ActorEntity[]>;
}

export class GetActors implements GetActorsUseCase {
    constructor(
        private readonly repository: ActorRepository
    ) {}

    execute(): Promise<ActorEntity[]> {
        return this.repository.getAll();
    }

}