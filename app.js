var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nodemailer =require('nodemailer');

var session = require('express-session');


// Importar los routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sesionRouter = require('./routes/sesion');
var sesionadminRouter = require('./routes/admin/sesion');
var emailRouter = require('./routes/email');
//var emailadminRouter = require('./routes/admin/emailadmin')
var galeriaRouter = require('./routes/galeria');

var app = express();


app.use(session({
  secret: '12345678',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized:true
}))

//secured = async (req, res, next) => {
 //try{
   // console.log(req.session.id_usuario);
   // if(req.session.id_usuario) {
   //  next();
   // } else {
   //  res.redirect('/admin/sesion')
   // }
 // }catch (error) {
  // console.log(error);
 // }
//}




// Configuración del motor de vistas
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

// Middleware de la aplicación
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Definir las rutas
app.use('/', indexRouter);
app.use('/sesion', sesionRouter);
app.use('/routes/users', usersRouter);
app.use('/sesion/admin/sesion', sesionadminRouter);
app.use('/email', emailRouter);
app.use('/galeria', galeriaRouter);
app.use(express.static(path.join(__dirname, '/sesion')));
//app.use('images',imagesRouter);


//app.use('/admin/emailadmin', emailadminRouter);





// Manejo de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // Configurar las variables locales, solo proporcionando errores en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

