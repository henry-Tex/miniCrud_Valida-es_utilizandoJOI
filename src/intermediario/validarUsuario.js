const jwt = require('jsonwebtoken');
const knex = require('../conexao')

// filtro para verificar usuario logado
async function validarUsuario (req, res, next) {
    const { authorization } = req.headers;
    const hash = process.env.HASH
    const token = authorization.replace('Bearer ', '').trim();

    if (!authorization) {
        return res.status(401).json({mensagem:'Não autorizado'});
    }
    try {
        const {id} = jwt.verify(token, hash);
        const usuarioExiste = await knex('usuarios').where({ id }).first();
        if (!usuarioExiste) {
            return res.status(404).json({mensagem:'Usuario não encontrado'});
        }
        const { senha, ...usuario } = usuarioExiste;
        req.usuario = usuario;
        next();
    } catch (error) {
        return res.status(500).json({mensagem:"Erro interno do servidor"});
    }
};

module.exports = validarUsuario;