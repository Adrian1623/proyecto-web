var nodemailer = require('nodemailer');
var router = express.Router();
router.post('/', async(req, res, next) => {
   
  
  var nombre = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
    to:'adry201555@gmail.com',
    subject: 'CONTACTO WEB',
    html: email + "se contacto a atravez de la web y quiere mas informacion a este correo :" + email + ".<br> Ademas, hizo este comentario : " + mensaje 
  }

  var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth:{
           user: process.env.SMTP_USER,
           pass: process.env.SMTP_PASS
      }
  

});


var info = await transport.senMail(obj);

  res.send('email', {
    message: 'Mensaje enviado correctamente'
   
  });
});