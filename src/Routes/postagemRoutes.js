import express from 'express';
import PostagemController from '../controllers/postagemController.js';
import { validaPostagem } from '../middelware/validaPostagem.js';
const router = express.Router();

router.get('/', PostagemController.listar);
router.get('/:id', PostagemController.listarPorId);
router.post('/',validaPostagem, PostagemController.criar);
router.put('/:id', PostagemController.atualizar);
router.delete('/:id', PostagemController.deletar);

export default router;