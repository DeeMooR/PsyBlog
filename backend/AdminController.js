import AdminService from "./AdminService.js";

class AdminController {
  async create(req, res) {
    try {
      const admin = await AdminService.create(req.body)
      res.status(200).json(admin);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
  async check(req, res) {
    try {
      const admin = await AdminService.check(req.body)
      res.status(200).json(admin);
    } catch (e) {
      res.status(500).json({ error: `Ошибка сервера: ${e}` });
    }
  }
}

export default new AdminController();
