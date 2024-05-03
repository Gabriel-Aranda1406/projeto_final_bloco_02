import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";


@Entity({name: "tb_produtos"})
export class Produto{

    @PrimaryGeneratedColumn() 
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;
    
    @IsNumber({maxDecimalPlaces: 2})
    @Column({type: "decimal", precision: 10, scale: 2, nullable: false}) 
    preco: number;

    @Column({type: "varchar", length: 5000})
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"//se apagar uma categoria, todos os filhos, os produtos, serão apagados.
    })
    categoria: Categoria;
}