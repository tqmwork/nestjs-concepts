import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity() 
export class Recado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: `varchar`, length: 255})
  texto: string;

  @Column({type: `varchar`, length: 50})
  de: string;

  @Column({type: `varchar`, length: 50})
  para: string;

  @Column({type: `boolean`, default: false})
  lido: boolean;

  @Column({type: `timestamp`, default: () => `CURRENT_TIMESTAMP`})
  data: Date;

  @CreateDateColumn()
  criadoEm?: Date;

  @UpdateDateColumn()
  atualizadoEm?: Date;

  
}
