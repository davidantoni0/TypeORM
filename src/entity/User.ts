import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { IsNotEmpty, IsString } from "class-validator";

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
    
    @Column({type: "boolean", default: true})
    isActive!: boolean;
    @OneToMany(()=> Post, (post) => post.user)
        posts!:Post;
}