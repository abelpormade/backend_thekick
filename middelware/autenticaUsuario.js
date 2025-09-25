import jwt from 'jsonwebtoken'


function autenticaUsuario(req, res, next){
    const autorizacaoCabecalho = req.headers['authorization'];
    const token = autorizacaoCabecalho && autorizacaoCabecalho.split(" ")[1]

    if(!token){
        return res.status(401).json({ message: "Token não fornecido" });
    }
    try {
        // eslint-disable-next-line no-undef
        const verificaToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verificaToken;//retorna o payload do usuario para a requisição
        next()
    } catch{
        return res.status(401).json({ message: "Token inválido ou expirado" });
        //next(erro) -->middleware para tratamento de erros
    }
}

export default autenticaUsuario;