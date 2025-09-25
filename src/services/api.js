import axios from 'axios';
import { obterCookie } from './utils/Cookies';
import decodificaToken from './utils/decodificaToken';

const api = axios.create({
  baseURL: 'http://localhost:3000', // endereço do backend
});

async function getUsuarios() {
  try {
    const resposta = await api.get('/usuarios');
    console.log(resposta);
  } catch (erro) {
    console.error(erro);
  }
}
export async function postLogin(dados) {
  await api.post('/usuarios', dados, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export async function postUsuarios(dados) {
  await api.post('/usuarios', dados, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export async function criarPostagem(dados) {
  const token  = obterCookie("tokenJwt")
  const payloadUsuario = decodificaToken(token)
  //é necessário modificar as informações do modelo do post
  //para salvar as outras informações da postagem -->texto, humor, likes, etc.
  const dadosPost = {
    id_usuario: payloadUsuario.id_usuario,
    dados:dados
  }
  await api.post('/postagens', dadosPost, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
}
export default { getUsuarios };