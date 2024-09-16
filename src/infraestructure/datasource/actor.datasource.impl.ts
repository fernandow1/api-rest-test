import { ActorDataSource } from "../../domain/datasources/actor.datasource";
import { ActorEntity } from "../../domain/entities/actor.entity";
import getKnexInstance  from '../../data/knex/index'

const knex = getKnexInstance();

export class ActorDataSourceImpl implements ActorDataSource {
    async getAll(): Promise<ActorEntity[]> {
        const actors = await knex('actor').select();
        return actors;
    }    
}