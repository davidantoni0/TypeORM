import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Request, Response } from "express";

export class UserController{
    private userRepository = AppDataSource.getRepository(User)

    async create(req: Request, res: Response){
        try {
            const {firstName, lastName} = req.body
            const newUser = this.userRepository.create({firstName, lastName})
            await this.userRepository.save(newUser)
            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(500).json({error: "Ocorreu um erro inesperado"})
        }
    }
}