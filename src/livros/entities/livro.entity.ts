import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'livros'})
export class Livro {
    @PrimaryGeneratedColumn({name: 'uuid', type:'bigint'})
    id: BigInt;

    @Column({nullable: false})
    titulo: string;
    
    @Column({nullable: false})
    autor: string;

    @Column({nullable: false})
    editora: string;

    @Column({name: 'ano_lancamento', type: 'integer'})
    anoLancamento: Int32Array;

    @Column()
    descricao: string;
}
