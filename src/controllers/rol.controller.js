let _rolService = null;

class RolController {
  constructor({ RolService }) {
    _rolService = RolService;
  }

  async create(req, res) {
    const { body } = req;
    const createdRol = await _rolService.create(body);
    return res.status(201).send(createdRol);
  }

  async get(req, res) {
    const { rolId } = req.params;
    const rol = await _rolService.get(rolId);
    return res.send(rol);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const roles = await _rolService.getAll(
      pageSize,
      pageNum,
    );
    return res.send(roles);
  }

  async update(req, res) {
    const { body } = req;
    const { rolId } = req.params;
    const updatedRol = await _rolService.update(
      rolId,
      body,
    );
    return res.send(updatedRol);
  }

  async delete(req, res) {
    const { rolId } = req.params;
    const deletedRol = _rolService.delete(rolId);
    return res.send(deletedRol);
  }
}

module.exports = RolController;
