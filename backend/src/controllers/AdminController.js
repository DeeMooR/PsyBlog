import AdminService from "../services/AdminService.js";

class AdminController {
  async createAdmin(req, res) {
    try {
      await AdminService.createAdmin(req.body)
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async checkAdmin(req, res) {
    try {
      const accessToken = await AdminService.checkAdmin(req.body)
      res.status(200).json(accessToken);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async checkToken(req, res) {
    try {
      const bool = await AdminService.checkToken(req.body.accessToken)
      res.status(200).json(bool);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
  async logout(req, res) {
    try {
      const bool = await AdminService.logout(req.body.accessToken)
      res.status(204).json(bool);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e.message}` });
    }
  }
}

export default new AdminController();
