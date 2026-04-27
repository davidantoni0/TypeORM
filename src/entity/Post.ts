import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { IsNotEmpty, IsString, MinLength, Validate } from "class-validator";
import { NoBlankSpaceConstraint } from "../decorators/noBlankSpaces";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @Validate(NoBlankSpaceConstraint)
    title!:string;

    @Column("text")
    @IsNotEmpty()
    @IsString()
    @Validate(NoBlankSpaceConstraint)
    content!: string;
    

    @ManyToOne(()=> User, (user) => user.posts,{onDelete: "CASCADE"})
    user!:User;
}