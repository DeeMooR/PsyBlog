import UserService from "./UserService.js";

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body)
      res.send(user);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new UserController();
