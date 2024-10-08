var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

router.get('/', function(req, res, next) {
  res.render('.admin/sesion',{
    layout:'admin/layout'
  });
});

var usuariosModel = require('../../models/usuariosModel');

router.post('/',async (req, res, next) => {
  try{
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await
    usuariosModel.getUserByUsernameAndPassword(usuario, password);
    if(data != undefined){
      
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/users');
   } else {
      res.render('admin/sesion', {
       
        error: true
     });
    }
 }catch (error) 
 {

  }
})

module.exports = router;