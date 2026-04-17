import { AppDataSource } from "../data-source";
import { Post } from "../entity/Post";
import { User } from "../entity/User";
import { Request, Response } from "express";

export class PostCotroller{
    private postRepository = AppDataSource.getRepository(Post)
    private userRepository = AppDataSource.getRepository(User)

    async listPost(req: Request, res: Response){
        try {
            const posts = await this.postRepository.find({relations: ["user"]});
            return res.status(200).json(posts)
            
            
        } catch (error) {
            return res.status(500).json({error: "Ocorreu um erro inesperado"})
        }
    }

    async createPost(req: Request, res: Response){

        try {
            const {title, content, userId} = req.body
            const user = await this.userRepository.findOneBy({id: userId});
            const newPost = await this.postRepository.create({title, content, user})
            await this.postRepository.save(newPost)
            return res.status(201).json(newPost)
            
        } catch (error) {
            return res.status(500).json({error: "Ocorreu um erro inesperado"})
        }
    }
    
}