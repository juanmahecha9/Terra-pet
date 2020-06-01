//realizar envio de correo para los datos
const nodemailer = require("nodemailer");
const emailC = require("../private/mail.config.json");

function correo(correo, nombre) {
  /* Configuracion correo electronico */
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailC.mail.email,
      pass: emailC.mail.password,
    },
  });

  var mailOptions = {
    from: emailC.mail.email,
    to: correo,
    subject: "Registro",
    text: "Welcome...",
    html:
      "<b>Bienvenid@ " +
      nombre +
      ' a nuestra fantabulosa aplicación.</b><br><br>Gracias por querer ser parte de esta grande familias<br><br><img width="80%" src="https://www.schnauzi.com/wp-content/uploads/2012/09/tigres-de-bengala-blancos.jpg" alt="Imagen...">',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = correo;
