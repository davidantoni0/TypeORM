import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/", (req,res) => userController.createUser);
router.get("/", (req,res) => userController.listUser);
router.delete("/:id",(req,res) => userController.deleteUser)
router.patch("/:id",(req,res) => userController.updateUser)
router.patch("/:id/toggle",(req,res) => userController.toggleActiveUser)
router.get("/active", (req,res) => userController.listActiveUser);

export const userRoutes = router;