import { Router } from 'express';
import ComentarioController from '../controllers/comentarioController.js';

const comentarioController = new ComentarioController();

const router = Router();

router.get('/comentario', comentarioController.pegaTodos);
router.get('/comentario/:id', comentarioController.pegaUmPorId);
router.post('/comentario', comentarioController.criaNovo);
router.put('/comentario/:id', comentarioController.atualiza);
router.delete('/comentario/:id', comentarioController.exclui);


export default router;