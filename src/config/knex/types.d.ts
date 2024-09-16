import { Knex } from 'knex';

declare module 'knex/types/tables' {
  interface Actor {
    actorId: number;
    firstName: string;
    lastName: string;
    lastUpdate: Date;
  }

  interface Tables {
    actor: Actor;
  }
}
