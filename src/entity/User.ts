import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from "class-validator";
import { IsBrPhoneConstraint } from "../decorators/isBrPhone";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    @IsNotEmpty()
    @IsString()
    firstName!: string;

    @Column("varchar")
    @IsNotEmpty()
    @IsString()
    lastName!: string;

    @Column("varchar", { unique: true })
    @IsNotEmpty()
    @IsEmail({}, { message: "O e-mail fornecido não é válido" })
    email!: string;

    @Column({type: "varchar", select: false})
    @IsNotEmpty()
    @MinLength(6)
    password!: string;

    @Column({ type: "varchar", length: 15, nullable: false })
    @IsNotEmpty({ message: "O celular é obrigatório" })
    @Validate(IsBrPhoneConstraint)
    phone!: string;
    
    @Column({type: "boolean", default: true})
    isActive!: boolean;
    @OneToMany(()=> Post, (post) => post.user)
        posts!:Post;
}