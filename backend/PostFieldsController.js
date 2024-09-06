import PostFieldsService from "./PostFieldsService.js";

class PostFieldsController {
  async create(req, res) {
    try {
      const field = await PostFieldsService.create(req.body)
      res.send(field);
    } catch (e) {
      res.status(500).json('Ошибка')
    }
  }
  async getOnePostId(req, res) {
    try {
      const fields = await PostFieldsService.getOnePostId(req.query.post_id)
      res.send(fields);
    } catch (e) {
      res.status(500).json('Ошибка')
    }
  }
}

export default new PostFieldsController();
