import { Router } from "express";
import { PostCotroller } from "../controllers/PostController";

const router = Router();
const postController = new PostCotroller();

router.post("/", (req,res) => postController.createPost(req,res));
router.get("/", (req,res) => postController.listPost(req,res));

export const postRoutes = router;