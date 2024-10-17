import PostService from "../services/PostService.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll(req);
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req, req.params.id);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async getFullPost(req, res) {
    try {
      const post = await PostService.getFullPost(req.params.id);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async getShortPosts(req, res) {
    try {
      const posts = await PostService.getShortPosts(req);
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async getShortPostsTop(req, res) {
    try {
      const posts = await PostService.getShortPostsTop(req);
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async getShortPostsAdmin(req, res) {
    try {
      const posts = await PostService.getShortPostsAdmin(req);
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async createPost(req, res) {
    try {
      const postId = await PostService.createPost(req.body)
      res.status(200).json(postId);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async updatePost(req, res) {
    try {
      await PostService.updatePost(req.params.id, req.body)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async deletePost(req, res) {
    try {
      await PostService.deletePost(req.params.id);
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async createImage(req, res) {
    try {
      const image = req.file.filename;
      await PostService.createImage(+req.body.post_id, image)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async updateImage(req, res) {
    try {
      const image = req.file.filename;
      await PostService.updateImage(+req.body.post_id, image)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
}

export default new PostController();
