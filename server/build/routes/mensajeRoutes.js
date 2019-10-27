"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensajeController_1 = require("../controlers/mensajeController");
class MensajeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', mensajeController_1.mensajeController.list);
        this.router.get('/:id', mensajeController_1.mensajeController.getOne);
        this.router.get('/maux/:id', mensajeController_1.mensajeController.getMensajesAux);
        this.router.get('/mest/:id', mensajeController_1.mensajeController.getMensajesEst);
        this.router.post('/', mensajeController_1.mensajeController.create);
        this.router.delete('/:id', mensajeController_1.mensajeController.delete);
        this.router.put('/:id', mensajeController_1.mensajeController.update);
    }
}
const mensajeRoutes = new MensajeRoutes();
exports.default = mensajeRoutes.router;
