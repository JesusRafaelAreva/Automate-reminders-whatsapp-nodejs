const { startAPI } = require('./src/api.js');
const { programador_tareas } = require('./src/programador.js');


(async () => {
    try {
        const cliente = await startAPI();
        programador_tareas(cliente);
    } catch (error) {
        console.log('Error en index', error);
    }
})();