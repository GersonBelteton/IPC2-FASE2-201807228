"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auxiliarController_1 = require("../controlers/auxiliarController");
class AuxiliarRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', auxiliarController_1.auxiliarController.list);
        this.router.get('/ac', auxiliarController_1.auxiliarController.listAuxiliarCurso);
        this.router.get('/:id', auxiliarController_1.auxiliarController.getOne);
        this.router.post('/', auxiliarController_1.auxiliarController.create);
        this.router.delete('/:id', auxiliarController_1.auxiliarController.delete);
        this.router.put('/:id', auxiliarController_1.auxiliarController.update);
    }
}
const auxiliarRoutes = new AuxiliarRoutes();
exports.default = auxiliarRoutes.router;
