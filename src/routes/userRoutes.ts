import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/",userController.createUser);
router.get("/",userController.listUser);
router.delete("/:id",userController.deleteUser);
router.patch("/:id",userController.updateUser);
router.patch("/:id/toggle",userController.toggleActiveUser);
router.get("/active", userController.listActiveUser);
router.get("/:id", userController.listByIdUser);

export const userRoutes = router;