const joi = require('joi');


const usuarioSchema = joi.object(
    {
    nome: joi.string().required().messages({
        'any,required':'O campo nome é obrigatório',
        'string.empty':'O campo nome é obrigatório'
    }),
    email: joi.string().email().required().messages({
        'any,required':'O campo email é obrigatório',
        'string.empty':'O campo email é obrigatório',
        'string.email':'Ocampo email precisa ter um formato válido'
    }),
    senha: joi.string().required().messages({
        'any,required':'O campo nome é obrigatório',
        'string.empty':'O campo nome é obrigatório'}),
    nome_loja: joi.string().required().messages({
        'any,required':'O campo nome é obrigatório',
        'string.empty':'O campo nome é obrigatório'
    })
}
);

module.exports=usuarioSchema