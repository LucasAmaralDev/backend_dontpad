import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pagina } from "./entity/Pagina"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "@Luc97ari",
    database: "dontpad",
    synchronize: true,
    logging: false,
    entities: [Pagina],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Conectado com sucesso!")
    })
    .catch((error) => {
        console.log("Erro ao conectar com o banco de dados!")
        console.log(error)
    }
)

export { AppDataSource }