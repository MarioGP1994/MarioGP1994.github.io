import express from 'express';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'El mensaje es demasiado largo' });
  }

  const spamWords = [
    'casino', 'bitcoin', 'viagra', 'sexo', 'dinero rápido', 'criptomonedas', 'oferta', 'ganar dinero', 'premio',
    'casino', 'bitcoin', 'crypto', 'viagra', 'sex', 'money', 'investment', 'win money', 'offer', 'lottery', 'poker'
  ];

  if (spamWords.some(word => message.toLowerCase().includes(word))) {
    return res.status(400).json({ error: 'Contenido no permitido' });
  }

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    replyTo: email,
    subject: `Nuevo mensaje de ${name}`,
    text: `De: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>De:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ success: false, error: 'Error al enviar el correo' });
  }
});

export default router;
