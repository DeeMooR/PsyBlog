import express from 'express';
import PostController from "./PostController.js";
import PostFieldsController from "./PostFieldsController.js";

const router = express.Router();

router.post('/posts', PostController.create)
router.put('/posts/:id', PostController.update)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.post('/posts/addBlock', PostController.addBlock)
// router.put('/posts', PostController.update)
// router.delete('/posts/:id', PostController.delete)

router.post('/post_fields', PostFieldsController.create)
router.get('/post_fields', PostFieldsController.getOnePostId)

export default router;