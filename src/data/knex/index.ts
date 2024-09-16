import Knex from "knex";
import config from "../../config/knex/connection";

let knexInstance: Knex.Knex | null = null;

const getKnexInstance = () => {
    if(!knexInstance) {
        knexInstance = Knex(config);
    }

    return knexInstance;
}

export default getKnexInstance;