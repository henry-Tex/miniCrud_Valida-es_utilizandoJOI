const rotas = require('express')();
const { obterPerfil, atualizarPerfil } = require('./controladores/perfil');
const validarUsuario = require('./intermediario/validarUsuario');
const login = require('./controladores/login');
const cadastroUsuario = require('./controladores/cadastro');
const validarRequisicao = require('./intermediario/validarRequisicao');
const usuarioSchema = require('./validacoes/usuario');
const loginSchema = require('./validacoes/login');

// endpoint para cadastro de usuario
rotas.post('/usuarios', validarRequisicao(usuarioSchema),cadastroUsuario);

// login
rotas.post('/login',validarRequisicao(loginSchema), login);

// filtro para verificar usuario logado
rotas.use(validarUsuario);

// obter perfil do usuario logado pelo token
rotas.get('/perfil',obterPerfil);

// atualizar perfil do usuario logado
rotas.put('/perfil', validarRequisicao(usuarioSchema),atualizarPerfil);

module.exports=rotas;