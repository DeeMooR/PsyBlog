import PostBlocksService from "./PostBlocksService.js";

class PostFieldsController {
  async create(req, res) {
    try {
      const field = await PostBlocksService.create(req.body)
      res.send(field);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async getOnePostId(req, res) {
    try {
      const fields = await PostBlocksService.getOnePostId(req.query.post_id)
      res.send(fields);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async updateBlock(req, res) {
    try {
      const { post_id, block_number, fields } = req.body;
      const response = await PostBlocksService.updateBlock(post_id, block_number, fields)
      res.send(response);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async deleteBlock(req, res) {
    try {
      const { post_id, block_number } = req.body;
      const response = await PostBlocksService.deleteBlock(post_id, block_number)
      res.send(response);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new PostFieldsController();
