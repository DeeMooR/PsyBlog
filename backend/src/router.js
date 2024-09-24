import express from 'express';
import { PostController, PostBlocksController, UserController, AdminController } from './controllers/index.js';

const createRouter = (upload) => {
  const router = express.Router();

  router.get('/posts', PostController.getAll)
  router.get('/posts/:id', PostController.getOne)
  router.get('/fullPosts/:id', PostController.getFullPost)
  router.get('/shortPosts', PostController.getShortPosts)
  router.get('/shortPosts/top', PostController.getShortPostsTop)
  router.get('/shortPosts/admin', PostController.getShortPostsAdmin)
  
  router.post('/posts', PostController.createPost)
  router.put('/posts/:id', PostController.updatePost)
  router.delete('/posts/:id', PostController.deletePost)
  
  router.post('/post/image', upload.single('image'), PostController.createImage)
  router.put('/post/image', upload.single('image'), PostController.updateImage)

  router.get('/post_blocks', PostBlocksController.getBlocksPostId)
  router.post('/post_blocks', PostBlocksController.createBlock)
  router.put('/post_blocks', PostBlocksController.updateBlock)
  router.delete('/post_blocks', PostBlocksController.deleteBlock)

  router.get('/users', UserController.getAllUsers)
  router.post('/users', UserController.createUser)
  router.delete('/users/:id', UserController.deleteUser)

  router.post('/admin', AdminController.createAdmin)
  router.post('/admin/check', AdminController.checkAdmin)

  return router;
}

export default createRouter;