import PostService from "./PostService.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getFullPost(req, res) {
    try {
      const post = await PostService.getFullPost(req.params.id);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getShortPosts(req, res) {
    try {
      const posts = await PostService.getShortPosts();
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getShortPostsTop(req, res) {
    try {
      const posts = await PostService.getShortPostsTop();
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getShortPostsAdmin(req, res) {
    try {
      const posts = await PostService.getShortPostsAdmin(req);
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async createPost(req, res) {
    try {
      const postId = await PostService.createPost(req.body)
      res.status(200).json(postId);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async updatePost(req, res) {
    try {
      await PostService.updatePost(req.params.id, req.body)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async deletePost(req, res) {
    try {
      await PostService.deletePost(req.params.id);
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async createImage(req, res) {
    try {
      const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      await PostService.createImage(+req.body.post_id, image)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async updateImage(req, res) {
    try {
      const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      await PostService.updateImage(+req.body.post_id, image)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new PostController();
