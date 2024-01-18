
import express = require('express');
import cors = require('cors');
import { PaginController } from './controller/Pagina.controller';

const app = express();

const paginaController = new PaginController()

app.use(cors());
app.use(express.json());

app.get('/*', paginaController.getPagina);
app.post('/*', paginaController.postPagina);


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
