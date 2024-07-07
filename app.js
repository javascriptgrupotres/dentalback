// START app.js


const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas de la API
const pacienteRoutes = require('./routes/pacienteRoutes');
const profesionalRoutes = require('./routes/profesionalRoutes');
const tratamientoRoutes = require('./routes/tratamientoRoutes');
const turnoRoutes = require('./routes/turnoRoutes');

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/profesionales', profesionalRoutes);
app.use('/api/tratamientos', tratamientoRoutes);
app.use('/api/turnos', turnoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// END app.js