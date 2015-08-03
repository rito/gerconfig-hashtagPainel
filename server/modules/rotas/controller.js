var Model = require('./model')
  , msg = ''
  , rotas = ''
  , conteudoCatalogo = ''
  , Controller = {
      create: function(req, res) {
        var dados = req.body
          , model = new Model(dados);
        model.save(function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , retrieve: function(req, res) {
      var query = {};
        Model.find(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , get: function(req, res) {
        var query = {_id: req.params.id};
        Model.findOne(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , update: function(req, res) {
        var query = {_id: req.params.id}
          , mod = req.body;

        Model.update(query, mod, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , delete: function(req, res) {
        var query = {_id: req.params.id};

        Model.remove(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , renderList: function(req, res) {
      var query = {};
        Model.find(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            res.render('error', err);
          }
          else{
            console.log('Sucesso:', data);
            res.render('list', {beers: data});
          }
        });
      }
    , renderGet: function(req, res) {
        var query = {_id: req.params.id};
        Model.findOne(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            res.render('error', err);
          }
          else{
            console.log('Sucesso:', data);
            res.render('get', {beer: data});
          }
        });
      }
    , renderEdit: function(req, res) {
        var query = {_id: req.params.id};
        Model.findOne(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            res.render('error', err);
          }
          else{
            console.log('Sucesso:', data);
            res.render('edit', {beer: data});
          }
        });
      }
    , renderCreate: function(req, res) {
        res.render('create');
      }
    , gerarCatalogo: function(req, res) {
      var query = {};
        Model.find(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
          

            console.log('Pesquisa feita com sucesso:', data);
            console.log('Iniciando geração do Catalogo.xml...');
            rotas = data;
            //Iniciando construção do xml
            var fs = require('fs');
            var geradorXML = require('xml-writer');

            var catalogoXML = new geradorXML(true);

            //catalogoXML.startDocument();
            catalogoXML.startElement('catalogo');
              catalogoXML.writeComment('Inicio das Aplicacoes Base');



              rotas.forEach(function(value) {
                console.log('Criando rota... ' + value.id_rota);

                conteudoCatalogo = value.catalogo;

                conteudoCatalogo.forEach(function(conteudo) {

                catalogoXML.startElement('aplicacao')
                  .writeAttribute('id', value.id_rota)
                  .writeAttribute('tipo', conteudo.id)
                  .writeAttribute('nome', 'Ajuda');
                  catalogoXML.startElement('controles')
                    catalogoXML.startElement('controle')
                      .writeAttribute('classe', 'Itau.CL8')
                      .writeAttribute('x', '0')
                      .writeAttribute('y', '0' )
                      .endElement()
                  .endElement()
                .endElement()
                });
              });


              // catalogoXML.startElement('aplicacao')
              //   .writeAttribute('id', 'Ajuda')
              //   .writeAttribute('tipo', 'TelaPadrao')
              //   .writeAttribute('nome', 'Ajuda');
              //   catalogoXML.startElement('controles')
              //     catalogoXML.startElement('controle')
              //       .writeAttribute('classe', 'Itau.CL8')
              //       .writeAttribute('x', '0')
              //       .writeAttribute('y', '0' )
              //       .endElement()
              //   .endElement()
              // .endElement()
              catalogoXML.writeComment('Fim das Aplicacoes Base');
            catalogoXML.endDocument();
            console.log(catalogoXML.toString());


            fs.writeFile('/Users/jeanrito/Sites/Itau/XMLs/Catalogo.config', catalogoXML);
            console.log('criei o arquivo......');
            //Fim construção do xml






            msg = data;
          }
          res.json(msg);
        });
      }

    }
  ;

module.exports = Controller;
