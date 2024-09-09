import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body)
      res.send(post);
    } catch (e) {
      res.status(500).json('Ошибка')
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.send(posts);
    } catch (e) {
      res.status(500).json('Ошибка')
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.send(post);
    } catch (e) {
      res.status(500).json('Ошибка')
    }
  }
  async addBlock(req, res) {
    try {
      const { post_id, table_name } = req.headers;
      const post = await PostService.addBlock(post_id, table_name, req.body);
      res.send(post);
    } catch (e) {
      res.status(500).json('Ошибка')
    }
  }
}

export default new PostController();
