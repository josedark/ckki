var express = require('express');
var router = express.Router();

/* GET home page. */




router.get('/', function(req, res, next) {
 
 req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  var cuenta = "veces ingresado   "  +req.session.cuenta;  
  //console.log(req.session.cuenta);
  //res.send(cuenta);
  res.render('home',{title: 'Bienvenido'} );
});





module.exports = router;
