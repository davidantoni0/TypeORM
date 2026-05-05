import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const userControler = new UserController();

router.get("/", userControler.listUser);
router.post("/", userControler.createUser);
router.patch("/", authMiddleware, userControler.updateUser);
router.patch("/:id/toggle", userControler.toggleActiveUser);
router.get("/active", userControler.listActiveUser);
router.get("/:id", userControler.listByIdUser);
router.delete("/:id", userControler.deleteUser);

export const userRoutes = router;