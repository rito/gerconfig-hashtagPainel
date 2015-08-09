var mongoose2 = require('mongoose');
mongoose2.connect('mongodb://localhost/DesativaEA');

var db = mongoose2.connection;
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

var Schema = mongoose2.Schema
  ,  _schema = {
      menu: { type: String, default: '' }
      , menu_pai: { type: String, default: ''}
      , nivel_menu: {type: Number}
      , ordem_menu: {type: Number}
      , aplicacao: { type: String, default: '' }
      , filtro: { type: String, default: '' }
      , atalho: { type: String, default: '' }
    }
  , ModelSchema = new Schema(_schema)
  , ModelMenus = mongoose2.model('Menus', ModelSchema)
  ;

module.exports = ModelMenus;
