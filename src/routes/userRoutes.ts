import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import { UserRole } from "../entity/User";

const router = Router();
const userControler = new UserController();

router.get("/", userControler.listUser);
router.post("/", userControler.createUser);
router.patch("/", authMiddleware, userControler.updateUser);
router.patch("/:id/toggle", userControler.toggleActiveUser);
router.get("/active", userControler.listActiveUser);
router.get("/:id", userControler.listByIdUser);
router.delete("/:id", userControler.deleteUser);
router.patch("/role/:id", authMiddleware, roleMiddleware([UserRole.ADMIN]), userControler.updateRoleUser
  );

export const userRoutes = router;