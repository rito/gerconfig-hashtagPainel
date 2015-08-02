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
        id_rota: { type: Number, min: 0, default: '' }
      , acao: { type: String, default: '' }
      , rota_principal: { type: Boolean, default: 'true'}
      , rota_pai: { type: Number, min: 0, default: '' }
      , canal: { type: String, default: '' }
      , sistema: { type: String, default: '' }
      , encapsula_ps: { type: Boolean, default: 'true'}
      , menu_superior_pai: { type: String, default: '' }
      , menu_superior_filho: { type: String, default: '' }
      , menu_nivel1_lateral: { type: String, default: '' }
      , menu_nivel2_lateral: { type: String, default: '' }
      , menu_nivel3_lateral: { type: String, default: '' }
      , miolo_aplicacao: { type: String, default: '' }
      , api_categoria: { type: String, default: '' }
      , api_subcategoria: { type: String, default: '' }
      , sigla_pool: { type: String, default: '' }
      , caminho_url: { type: String, default: '' }
      , created_at: { type: Date, default: Date.now() }

      //, alcohol: { type: Number, min: 0, default: '' }
      //, price: { type: Number, min: 0, default: '' }
      //, category: { type: String, default: ''}
      //, created_at: { type: Date, default: Date.now() }
    }
  , ModelSchema = new Schema(_schema)
  , Model = mongoose.model('Rotas', ModelSchema)
  ;

module.exports = Model;
