import UserService from "./UserService.js";

class UserController {
  async getAll(req, res) {
    try {
      const posts = await UserService.getAll();
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async create(req, res) {
    try {
      const user = await UserService.create(req.body)
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async delete(req, res) {
    try {
      const response = await UserService.delete(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new UserController();
