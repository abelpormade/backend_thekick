import Postagem from '../models/postagem.js';

class PostagemController {
  static async listar(req, res) {
    const postagens = await Postagem.findAll();
    res.json(postagens);
  }

  static async listarPorId(req, res) {
    const postagem = await Postagem.findByPk(req.params.id);
    res.json(postagem);
  }

  static async criar(req, res) {
    const novaPostagem = await Postagem.create(req.body);
    res.json(novaPostagem);
  }

  static async atualizar(req, res) {
    await Postagem.update(req.body, { where: { id_postagem: req.params.id } });
    res.json({ message: 'Postagem atualizada!' });
  }

  static async deletar(req, res) {
    await Postagem.destroy({ where: { id_postagem: req.params.id } });
    res.json({ message: 'Postagem deletada!' });
  }
}

export default PostagemController;
