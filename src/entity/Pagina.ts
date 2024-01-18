import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Pagina {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rota: string

    @Column()
    conteudo: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataAtualizacao: Date

}
