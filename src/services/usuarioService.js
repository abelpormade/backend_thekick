import { Services } from "./Service.js";
import { definirCookie } from "./utils/Cookies.js";
import criaHashComSal from "./utils/criaHashSenha.js";
class UsuarioService extends Services{
    constructor(){
        super('Usuario')
    }
    async listar(){
        return await super.pegaTodosOsRegistros();
    }
    async listarPorId(id){
        return await super.pegaUmRegistroPorId(id);
    }
    async criarUsuario(dados){
        const usuario = { ...dados }
        const senhaHasheada = criaHashComSal();
        usuario.senha_usuario = senhaHasheada;
        const token = criaTokenJwt(usuario);
        definirCookie("tokenJwt", token)// aqui ele salva apenas no navegador, caso seja feito uma requisição via postman é necessário pegar este valor por aí
        return await super.criaUmRegistro(usuario);
    }
    async atualizarUsuario(requisicao, where){
        return await super.atualizaRegistro(requisicao, where);
    }
    async apagarUsuario(id){
        return await super.apagaRegistro(id);
    }
}
export default UsuarioService;