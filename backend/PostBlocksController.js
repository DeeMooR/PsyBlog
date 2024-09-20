import PostBlocksService from "./PostBlocksService.js";

class PostBlocksController {
  async getBlocksPostId(req, res) {
    try {
      const blocks = await PostBlocksService.getBlocksPostId(req.query.post_id)
      res.status(200).json(blocks);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async createBlock(req, res) {
    try {
      const { post_id, table_name, fields } = req.body;
      await PostBlocksService.createBlock(post_id, table_name, fields)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async updateBlock(req, res) {
    try {
      const { post_id, block_number, fields } = req.body;
      await PostBlocksService.updateBlock(post_id, block_number, fields)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async deleteBlock(req, res) {
    try {
      const { post_id, block_number } = req.body;
      await PostBlocksService.deleteBlock(post_id, block_number)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new PostBlocksController();
