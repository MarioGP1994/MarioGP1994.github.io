import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 2, 
  message: {
    success: false,
    error: 'Demasiadas solicitudes. Inténtalo de nuevo en un minuto.',
  },
  standardHeaders: true, 
  legacyHeaders: false,  
});

app.use('/api/contact', contactLimiter, contactRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

