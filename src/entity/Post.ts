import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    title!:string;

    @Column("text")
    @IsNotEmpty()
    @IsString()
    content!: string;

    @ManyToOne(()=> User, (user) => user.posts,{onDelete: "CASCADE"})
    user!:User;
}