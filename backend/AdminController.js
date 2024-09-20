import AdminService from "./AdminService.js";

class AdminController {
  async createAdmin(req, res) {
    try {
      await AdminService.createAdmin(req.body)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async checkAdmin(req, res) {
    try {
      const bool = await AdminService.checkAdmin(req.body)
      res.status(200).json(bool);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new AdminController();
