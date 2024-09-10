import PostService from "./PostService.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.send(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.send(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getFullPost(req, res) {
    try {
      const post = await PostService.getFullPost(req.params.id);
      res.send(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getShortPosts(req, res) {
    try {
      const posts = await PostService.getShortPosts();
      res.send(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getShortPostsAdmin(req, res) {
    try {
      const posts = await PostService.getShortPostsAdmin();
      res.send(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async create(req, res) {
    try {
      const post = await PostService.create(req.body)
      res.send(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async update(req, res) {
    try {
      const post = await PostService.update(req.params.id, req.body)
      res.send(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async delete(req, res) {
    try {
      const response = await PostService.delete(req.params.id);
      res.send(response);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async addBlock(req, res) {
    try {
      const { post_id, table_name } = req.headers;
      const post = await PostService.addBlock(post_id, table_name, req.body);
      res.send(post);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new PostController();
