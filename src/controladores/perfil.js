const knex = require('../conexao')
// obter perfil do usuario logado pelo token
async function obterPerfil (req, res) {
    return res.status(200).json(req.usuario);
};

// atualizar perfil do usuario logado
async function atualizarPerfil (req, res) {
    const {
        nome,
        email,
        senha,
        nome_loja
    } = req.body;
    const { id } = req.usuario;
    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404)
            .json({mensagem:'É obrigatório informar ao menos um campo para atualização'});
    }
    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first();
        if (!usuarioExiste) {
            return res.status(404).json({mensagem:'Usuario não encontrado'});
        }
        if (senha) {
            senhaCriptografada = await bcrypt.hash(senha, 10);
        }
        if (email){
        if (email !== req.usuario.email) {
            const emailUsuarioExiste = await knex('usuarios')
                .where({ email }).first();
            if (emailUsuarioExiste) {
                return res.status(400).json({mensagem:'O Email já existe.'});
            }
        }
        }
        await knex('usuarios')
            .where({ id })
            .update({
                nome,
                email,
                senha:senhaCriptografada,
                nome_loja
            });
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({mensagem:"Erro interno do servidor"});
    }
};

module.exports={obterPerfil,atualizarPerfil}