const joi = require('joi');

const loginSchema = joi.object(
    {
    email: joi.string().email().required().messages({
        'any,required':'O campo email é obrigatório',
        'string.empty':'O campo email é obrigatório',
        'string.email':'Ocampo email precisa ter um formato válido'
    }),
    senha: joi.string().required().messages({
        'any,required':'O campo nome é obrigatório',
        'string.empty':'O campo nome é obrigatório'
    })
}
);

module.exports=loginSchema