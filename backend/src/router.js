import express from 'express';
import { PostController, PostBlocksController, UserController, AdminController } from './controllers/index.js';
import { authenticateToken } from './token.js';

const createRouter = (upload) => {
  const router = express.Router();

  router.get('/posts', PostController.getAll)
  router.get('/posts/:id', PostController.getOne)
  router.get('/fullPosts/:id', PostController.getFullPost)
  router.get('/shortPosts', PostController.getShortPosts)
  router.get('/shortPosts/top', PostController.getShortPostsTop)
  router.get('/shortPosts/admin', authenticateToken, PostController.getShortPostsAdmin)
  
  router.post('/posts', authenticateToken, PostController.createPost)
  router.put('/posts/:id', authenticateToken, PostController.updatePost)
  router.delete('/posts/:id', authenticateToken, PostController.deletePost)
  
  router.post('/post/image', authenticateToken, upload.single('image'), PostController.createImage)
  router.put('/post/image', authenticateToken, upload.single('image'), PostController.updateImage)

  router.get('/post_blocks', PostBlocksController.getBlocksPostId)
  router.post('/post_blocks', authenticateToken, PostBlocksController.createBlock)
  router.put('/post_blocks', authenticateToken, PostBlocksController.updateBlock)
  router.delete('/post_blocks', authenticateToken, PostBlocksController.deleteBlock)

  router.get('/users', authenticateToken, UserController.getAllUsers)
  router.post('/users', UserController.createUser)
  router.delete('/users/:id', authenticateToken, UserController.deleteUser)

  router.post('/admin', AdminController.createAdmin)
  router.post('/admin/login', AdminController.checkAdmin)
  router.post('/admin/checkToken', authenticateToken, AdminController.checkToken)
  router.post('/admin/logout', AdminController.logout)

  return router;
}

export default createRouter;