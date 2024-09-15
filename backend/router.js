import express from 'express';
import PostController from "./PostController.js";
import PostBlocksController from "./PostBlocksController.js";

const createRouter = (upload) => {
  const router = express.Router();

  router.get('/posts', PostController.getAll)
  router.get('/posts/:id', PostController.getOne)
  router.get('/fullPost/:id', PostController.getFullPost)
  router.get('/shortPosts', PostController.getShortPosts)
  router.get('/shortPosts/admin', PostController.getShortPostsAdmin)
  router.post('/posts', PostController.create)
  router.post('/post/image', upload.single('image'), PostController.createImage)
  router.put('/posts/:id', PostController.update)
  router.delete('/posts/:id', PostController.delete)

  router.post('/posts/addBlock', PostController.addBlock)
  // router.put('/posts', PostController.update)
  // router.delete('/posts/:id', PostController.delete)

  router.post('/post_blocks', PostBlocksController.create)
  router.get('/post_blocks', PostBlocksController.getOnePostId)
  router.put('/post_blocks/block', PostBlocksController.updateBlock)
  router.delete('/post_blocks/block', PostBlocksController.deleteBlock)

  return router;
}

export default createRouter;