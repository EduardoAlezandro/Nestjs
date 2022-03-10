import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('empresas')
export class EmpresaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({default: "monee"})
    nome: string;
    @Column({default: "12837182"})
    doc: string;




}
