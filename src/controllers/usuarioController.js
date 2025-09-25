import { Op } from 'sequelize';
import Usuario from '../models/usuarios.js';
import { VerificaLogin } from '../services/utils/verificaLogin.js';
import { criaTokenJwt } from '../services/utils/criaTokenJwt.js';
import { definirCookie, obterCookie, removerCookie } from '../services/utils/Cookies.js';

import Controller from './Controller.js';

import UsuarioService from '../services/usuarioService.js';
const usuarioService = new UsuarioService;

class UsuarioController extends Controller{
  constructor(){
    super(usuarioService);
  }
  async login(req, res){
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
  async deslogar(req, res){
    const usuarioLogado = VerificaLogin.estaLogado(req.params.id);
      if(usuarioLogado){
        const token = obterCookie("tokenJwt");
        removerCookie(token)
        res.json({ message: 'Usuário desconectado com sucesso' });
      }
  }
  async filtrarPorNome(req, res) {
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
