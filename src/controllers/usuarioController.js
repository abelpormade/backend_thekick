import { Op } from 'sequelize';
import Usuario from '../models/usuarios.js';
import { VerificaLogin } from '../services/utils/verificaLogin.js';
import { criaTokenJwt } from '../services/utils/criaTokenJwt.js';
import criaHashComSal from '../services/utils/criaHashSenha.js';
import { definirCookie, obterCookie, removerCookie } from '../services/utils/Cookies.js';


class UsuarioController {
  static async listar(req, res) {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  }

  static async listarPorId(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);
    res.json(usuario);
  }

  static async criar(req, res) {
  try {
    const senhaHasheada = criaHashComSal(req.body.senha_usuario);
    req.body.senha_usuario = senhaHasheada;
    const novoUsuario = await Usuario.create(req.body);
    const token = criaTokenJwt(novoUsuario);
    definirCookie("tokenJwt", token)

    res.status(201).json(`${novoUsuario}, token: ${token}`);
  } catch (erro) {
    res.status(500).json({ error: erro.message });
  }
}

  static async atualizar(req, res) {
    await Usuario.update(req.body, { where: { id_usuario: req.params.id } });
    res.json({ message: 'Usuário atualizado!' });
  }

  static async deletar(req, res) {
    await Usuario.destroy({ where: { id_usuario: req.params.id } });
    res.json({ message: 'Usuário deletado!' });
  }
  static async login(req, res){
    const usuario = req.body
      const usuarioLogado = VerificaLogin.estaLogado(req.params.id, req.user, req.body.senha_usuario);
      if(!usuarioLogado){
        res.json({message: 'Usuário não encontrado'})
      } else if(usuarioLogado == 'true'){
        res.json({ message: 'Usuário Já está conectado' });
      }
      else{
        const token = criaTokenJwt(usuario)
        definirCookie("tokenJwt", token)
        res.json({message:`token criado: ${token}`})
      }
  }
  static async deslogar(req, res){
    const usuarioLogado = VerificaLogin.estaLogado(req.params.id);
      if(usuarioLogado){
        const token = obterCookie("tokenJwt");
        removerCookie(token)
        res.json({ message: 'Usuário desconectado com sucesso' });
      }
  }
  static async filtrarPorNome(req, res) {
    const { nome } = req.query; // pega o ?nome= do navegador
    try {
      const usuarios = await Usuario.findAll({
        where: {
          nome_usuario: {
            [Op.iLike]: `%${nome}%` // iLike = case insensitive (Postgres)
          }
        }
      });
      res.status(200).json(usuarios);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - erro no filtro` });
    }
  }

}

export default UsuarioController;
