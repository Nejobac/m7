import {Sequelize} from "sequelize";
import * as dotenv from "dotenv";
import "dotenv/config";


// Me estoy conectando a la bbdd
export const db = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: "postgres",
    }
);

async function syncDB() {
    try {
        await db.authenticate();
        console.log("Connections has been established suddessfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

syncDB();
