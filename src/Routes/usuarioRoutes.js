import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';
import { validaCadastroUsuario } from '../middelware/validaCadastroUsuario.js';
import { validaLoginUsuario } from '../middelware/validaLoginUsuario.js';
const router = express.Router();

router.get('/filtro', UsuarioController.filtrarPorNome);
router.get('/', UsuarioController.listar);
router.get('/:id', UsuarioController.listarPorId);
router.post('/',validaCadastroUsuario, UsuarioController.criar);
router.put('/:id', UsuarioController.atualizar);
router.delete('/:id', UsuarioController.deletar);
router.post('/login/:id',validaLoginUsuario, UsuarioController.login);

router.get('/deslogar/:id', UsuarioController.deslogar);

export default router;
