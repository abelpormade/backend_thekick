import Usuario from '../../models/usuarios.js';
import { decodificaHash } from "./DecodificaHash.js";

export class VerificaLogin{
  constructor(){}
  async estaLogado(id, payload, senha){
    const usuario = await Usuario.findOne({ where: { id_usuario: id }} );
    const senhaCorreta =  await decodificaHash(senha, usuario.senha_usuario);
    const reqUsuario =  payload;
    if(!(usuario || reqUsuario || senhaCorreta)){
        return false;
    }
    
    return true;
  }

}