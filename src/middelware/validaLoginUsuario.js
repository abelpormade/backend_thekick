import * as yup from 'yup';

const usuarioSchema = yup.object({
    nome_usuario: 
    yup.string().required().min(3),
    email_usuario: yup.string().email(),
    senha_usuario: yup.string()
})

async function validaLoginUsuario(req, res, next){
    try {
    await usuarioSchema.validate(req.body, {abortEarly:false})
    
    next()
    } catch (erro) {
        next(erro)
    }
}
export { validaLoginUsuario };