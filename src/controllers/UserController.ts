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

    async list(req: Request, res: Response){
        try {
            const users = await this.userRepository.find();
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json({error: "Ocorreu um erro inesperado"})
        }
    }

    async delete(req: Request, res: Response){
        try {
            const id = Number(req.params.id)
            const deletedUser = await this.userRepository.findOneBy({id})
            if (isNaN(id)){
                res.status(400).json({message: "id inválido"})
            }
            await this.userRepository.delete(id)
            return res.status(200).json(deletedUser)
            //return res.status(204)
        } catch (error) {
            return res.status(500).json({error: "Ocorreu um erro inesperado"})
        }
    }

    async update(req: Request, res: Response){
        try {
            const id = Number(req.params.id)
            const {firstName, lastName} = req.body
            await this.userRepository.findOneBy({id})
            await this.userRepository.update(id, { firstName: firstName, lastName: lastName });
            const updatedUser = await this.userRepository.findOneBy({id})
            return res.status(200).json(updatedUser)
        } catch (error) {
            return res.status(500).json({error: "Ocorreu um erro inesperado"})
        }
    }


}