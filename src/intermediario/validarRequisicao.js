const validarRequisicao = (schema) => async (req,res,next) => {
    try{
        await schema.validateAsync(req.body)
        next()
    }catch (error){
        return res.status(500).json({mensagem:'Erro interno no servidor'})
    }
};

module.exports = validarRequisicao;