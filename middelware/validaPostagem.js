import yup, { date } from 'yup'

const postagemSchema = yup.object({
    data_postagem: date().default(()=> new Date())
})

async function validaPostagem(req, res, next){
    try {
    await postagemSchema.validate(req.body, {abortEarly:false});
    next()
    } catch (erro) {
        next(erro)
    }
}
export { validaPostagem };