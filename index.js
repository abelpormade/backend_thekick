import cors from 'cors';
import express from 'express';
import sequelize from './src/config/db.js';
import usuarioRoutes from '././src/Routes/usuarioRoutes.js';
import postagemRoutes from '././src/Routes/postagemRoutes.js';
import comentarioRoutes from '././src/Routes/comentarioRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/usuarios', usuarioRoutes);
app.use('/postagens', postagemRoutes);
app.use('/comentarios', comentarioRoutes);

await sequelize.sync(); // sincroniza os models sem apagar dados

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
