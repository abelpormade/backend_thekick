import { Router } from 'express';

import UsuarioController from '../controllers/usuarioController.js';
import { validaCadastroUsuario } from '../middelware/validaCadastroUsuario.js';
import { validaLoginUsuario } from '../middelware/validaLoginUsuario.js';

const usuarioController =  new UsuarioController();
const router = Router();

router.get('/filtro', usuarioController.filtrarPorNome);
router.get('/', usuarioController.pegaTodos)
router.get('/:id', usuarioController.pegaUmPorId);
router.post('/',validaCadastroUsuario, usuarioController.criaNovo);
router.put('/:id', usuarioController.atualiza);


router.delete('/:id', usuarioController.exclui);
router.post('/login/:id',validaLoginUsuario, usuarioController.login);

router.get('/deslogar/:id', UsuarioController.deslogar);

export default router;
