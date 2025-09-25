import { Services } from "./Service.js";

export class usuarioService extends Services{
    constructor(){
        super('Usuario')
    }
    async listar(){
        return await super.pegaTodosOsRegistros();
    }
    async listarPorId(id){
        return await super.pegaUmRegistroPorId(id);
    }
}