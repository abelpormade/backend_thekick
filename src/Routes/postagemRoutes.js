import { Router } from 'express';
import PostagemController from '../controllers/postagemController.js';
import { validaPostagem } from '../middelware/validaPostagem.js';

const postagemController = new PostagemController();
const router = Router();

router.get('/', postagemController.pegaTodos);
router.get('/:id', postagemController.pegaUmPorId);
router.post('/',validaPostagem, postagemController.criaNovo);
router.put('/:id', postagemController.atualiza);
router.delete('/:id', postagemController.exclui);

export default router;