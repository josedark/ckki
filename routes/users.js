var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
//const connectionString = process.env.DATABASE_URL ||'postgresql://postgres:ella@localhost:5432/app'
const connectionString = 'postgres://jxqerbcrmsnfmi:f68c182771ec150cb902bad6f225a3490070962678cbaba203bce74d8a3f4008@ec2-54-227-247-225.compute-1.amazonaws.com:5432/dcejne0o5r4ur0'
pg.defaults.ssl = true; 

    
router.get('/', function(req, res, next) {
  
   if (req.session.user) 
      {

     
      res.render('home',{title: 'Bienvenido  ' + req.session.user.nombre, tipoUsuario :1,nombre:req.session.user.nombre} );

      } else
      {
       
      res.render('login',{title: 'Bienvenido'} );

      };








    
    
    
   

   


});



router.get('/login', (req, res, next) =>{
 

console.log("probando");
const results = [];
pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

 const query = client.query('SELECT * FROM usuario ');

 query.on('row', (row) => {
      results.push(row);
    });
    
        query.on('end', () => {
      done();

      return res.json(results);
    });

    
    

});


});

router.post('/login', function(req, res) {       
  


  var user_id = req.body.usuario;
  var contrasena = req.body.contrasena;

  const datos = {};
   datos.err=true;
   datos.mensaje = 'contraseña invalida',
   datos.url = '/'

  console.log(user_id);
  console.log(contrasena);
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      datos.err=true;
      datos.mensaje = 'error Internal Server ';
      return res.status(500).json(datos);
    }else
    {
      const consulta = {
          text: "select idusuario , nombre from usuario   where (contrasena = md5($1 || $2 || 'ella' ))and nombre = $1;",
          values: [user_id, contrasena],
          };

           const query = client.query(consulta);

         query.on('error', function(err) {
               throw err;
          });
 
        query.on('fields', function(fields) {
             console.log(fields);
        });

         query.on('row', (row) => {

            datos.err=false;
            datos.url="/users";
            console.log(row.nombre);
            req.session.user=row;

          });
  
     query.on('end', () => {
      done();
      console.log(datos.err);
      return res.json(datos);
    });


         
       

         

    }



   });

  

  });




module.exports = router;
