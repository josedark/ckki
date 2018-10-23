var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
 
if (req.session.user) 
      {

     
      res.render('home',{title: 'Bienvenido  ' + req.session.user.nombre, tipoUsuario :1,nombre:req.session.user.nombre} );

      } else
      {
       
      res.render('login',{title: 'Bienvenido'} );

      };
});





module.exports = router;
