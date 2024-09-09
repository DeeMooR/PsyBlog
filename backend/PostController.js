import PostService from "./PostService.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.send(posts);
    } catch (e) {
      res.status(500).json('Ошибка', e)
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.send(post);
    } catch (e) {
      res.status(500).json('Ошибка', e)
    }
  }
  async create(req, res) {
    try {
      const post = await PostService.create(req.body)
      res.send(post);
    } catch (e) {
      res.status(500).json('Ошибка', e)
    }
  }
  async update(req, res) {
    try {
      const post = await PostService.update(req.params.id, req.body)
      res.send(post);
    } catch (e) {
      res.status(500).json('Ошибка', e)
    }
  }
  async delete(req, res) {
    try {
      const response = await PostService.delete(req.params.id);
      res.send(response);
    } catch (e) {
      res.status(500).json('Ошибка', e)
    }
  }
  async addBlock(req, res) {
    try {
      const { post_id, table_name } = req.headers;
      const post = await PostService.addBlock(post_id, table_name, req.body);
      res.send(post);
    } catch (e) {
      res.status(500).json('Ошибка', e)
    }
  }
}

export default new PostController();
