import UserService from "../services/UserService.js";

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async createUser(req, res) {
    try {
      await UserService.createUser(req.body)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id);
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
}

export default new UserController();
