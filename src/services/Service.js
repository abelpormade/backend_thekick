const dataSource = require('../models')

export class Services{
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }
    async pegaTodosOsRegistros(){
        return await dataSource[this.model].findAll();
    }
    async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({ where: { ...where } });//spread operator
    }
    async pegaUmRegistroPorId(id){
        return await dataSource[this.model].findByPk(id);
    }
    async criaUmRegistro(dados){
        return await dataSource[this.model].create(dados);
    }
    async atualizaRegistro(dados, where){
        return await dataSource[this.model].update(dados, { where: {...where }})
    }
    async apagaRegistro(id){
        return await dataSource[this.model].delete({ where: { id_usuario : id }})
    }
}