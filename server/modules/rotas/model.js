var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DesativaEA');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err);
});
db.on('open', function () {
  console.log('Conexão aberta.');
});
db.on('connected', function(err){
    console.log('Conectado');
});
db.on('disconnected', function(err){
    console.log('Desconectado');
});

var Schema = mongoose.Schema
  ,  _schema = {
        id_rota: { type: String, required: true, index: {unique: true}, default: '' }
      , acao: { type: String, default: '' }
      , rota_principal: { type: Boolean, default: 'true'}
      , rota_pai: { type: String, default: '' }
      , canal: { type: String, default: '' }
      , sistema: { type: String, default: '' }
      , encapsula_ps: { type: Boolean, default: 'true'}
      , menu_aplicacao: { type: String, default: '' }
      , atalho: { type: String, default: '' }
      , menu_pai: { type: String, default: '' }
      //, menu_superior_pai: { type: String, default: '' }
      //, menu_superior_filho: { type: String, default: '' }
      //, menu_nivel1_lateral: { type: String, default: '' }
      //, menu_nivel2_lateral: { type: String, default: '' }
      , menu_lateral_ordem: { type: String, default: '' }
      , miolo_aplicacao: { type: String, default: '' }
      , api_categoria: { type: String, default: '' }
      , api_subcategoria: { type: String, default: '' }
      , sigla_pool: { type: String, default: '' }
      , caminho_url: { type: String, default: '' }
      , created_at: { type: Date, default: Date.now() }
      , aplicacao: [{
            build: { type: String, default: '' }
          , pacote: { type: String, default: '' }
          , sigla: { type: String, default: '' }
          , stream: { type: String, default: '' }
          , componente: { type: String, default: '' }
      }]
      , transacao: [{
            build: { type: String, default: '' }
          , pacote: { type: String, default: '' }
          , sigla: { type: String, default: '' }
          , stream: { type: String, default: '' }
          , componente: { type: String, default: '' }
      }]
      , cmc: [{
            svc: { type: String, default: '' }
          , dll: { type: String, default: '' }
          , xml: { type: String, default: '' }
      }]
      , catalogo: [{
            id: { type: String, default: '' }
          , tipo: { type: String, default: '' }
          , nome: { type: String, default: '' }
          , classe: { type: String, default: '' }
          , valor: { type: String, default: '' }
          , nome_parametro: { type: String, default: '' }
          , valor_parametro: { type: String, default: '' }
      }]
      , gerenciador_mensagem: [{
            nome: { type: String, default: '' }
          , transacao: { type: String, default: '' }
          , conector: { type: String, default: '' }
          , caminho_url: { type: String, default: '' }
      }]
      , ajuda: [{
            tipo: { type: String, default: '' }
          , id: { type: String, default: '' }
          , nome: { type: String, default: '' }
          , linha: { type: String, default: '' }
          , dados: { type: String, default: '' }
      }]
      , navegacao: [{
            id_aplicacao: { type: String, default: '' }
          , nome: { type: String, default: '' }
          , grupo_mapa_site: { type: String, default: '' }
          , subgrupo1_mapa_site: { type: String, default: '' }
          , fluxo: { type: String, default: '' }
          , id_aplicacao_fluxo: { type: String, default: '' }
          , action: { type: String, default: '' }
          , nome: { type: String, default: '' }
          , mapa_site: { type: String, default: '' }
          , desc_mapa_site: { type: String, default: '' }
          , bread_crumb: { type: String, default: '' }
          , desc_bread_crumb: { type: String, default: '' }
          , pos_bread_crumb: { type: String, default: '' }
          , link_atual: { type: String, default: '' }
      }]

    }
  , ModelSchema = new Schema(_schema)
  , Model = mongoose.model('Rotas', ModelSchema)
  ;

module.exports = Model;
