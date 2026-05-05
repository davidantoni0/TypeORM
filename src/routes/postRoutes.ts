import { Router } from "express";
import { PostController} from "../controllers/PostController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const postController = new PostController();

router.get("/", postController.listPost);
router.post("/", authMiddleware, postController.createPost);
router.put("/:id", authMiddleware, postController.updatePost);
router.delete("/:id", authMiddleware, postController.deletePost);

export const postRoutes = router;