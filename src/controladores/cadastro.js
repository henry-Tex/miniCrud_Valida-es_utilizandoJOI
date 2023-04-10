const bcrypt = require('bcrypt');
const knex = require('../conexao');
const { $ } = require('../validacoes/usuario');

// endpoint para cadastro de usuario
async function cadastroUsuario (req, res) {
    const {
        nome,
        email,
        senha,
        nome_loja
    } = req.body;

    try {
        const usuarioEncontrado = await knex('usuarios')
            .where({ email }).first();

        if (usuarioEncontrado) {
            return res.status(400).json({mensagem:"O email já existe"});
        }
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const usuario = await knex('usuarios')
            .insert({
                nome,
                email,
                senha: senhaCriptografada,
                nome_loja
            }).returning('*');
            const {senha:$,...retornoUsuario} = usuario[0];
        return res.status(201).json(retornoUsuario);
    } catch (error) {
        console.log(error.menssage)
        return res.status(500).json({mensagem:"Erro interno do servidor"});
    }
};

module.exports=cadastroUsuario;