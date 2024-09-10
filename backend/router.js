import express from 'express';
import PostController from "./PostController.js";
import PostFieldsController from "./PostFieldsController.js";

const router = express.Router();

router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.get('/shortPosts', PostController.getShortPosts)
router.get('/shortPosts/admin', PostController.getShortPostsAdmin)
router.post('/posts', PostController.create)
router.put('/posts/:id', PostController.update)
router.delete('/posts/:id', PostController.delete)

router.post('/posts/addBlock', PostController.addBlock)
// router.put('/posts', PostController.update)
// router.delete('/posts/:id', PostController.delete)

router.post('/post_fields', PostFieldsController.create)
router.get('/post_fields', PostFieldsController.getOnePostId)

export default router;