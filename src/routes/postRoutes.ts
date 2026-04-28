import { Router } from "express";
import { PostController} from "../controllers/PostController";

const router = Router();
const postController = new PostController();

router.get("/", postController.listPost);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export const postRoutes = router;