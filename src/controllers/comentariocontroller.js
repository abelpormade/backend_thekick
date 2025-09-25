import Comentario from '../models/comentarios.js';

class ComentarioController {
  static async listar(req, res) {
    const comentarios = await Comentario.findAll();
    res.json(comentarios);
  }

  static async listarPorId(req, res) {
    const comentario = await Comentario.findByPk(req.params.id);
    res.json(comentario);
  }

  static async criar(req, res) {
    const novoComentario = await Comentario.create(req.body);
    res.json(novoComentario);
  }

  static async atualizar(req, res) {
    await Comentario.update(req.body, { where: { id_comentario: req.params.id } });
    res.json({ message: 'Comentário atualizado!' });
  }

  static async deletar(req, res) {
    await Comentario.destroy({ where: { id_comentario: req.params.id } });
    res.json({ message: 'Comentário deletado!' });
  }
}

export default ComentarioController;
