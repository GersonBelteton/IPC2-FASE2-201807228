"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursoController_1 = require("../controlers/cursoController");
class CursoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cursoController_1.cursoController.list);
        this.router.get('/:id', cursoController_1.cursoController.getOne);
        this.router.post('/', cursoController_1.cursoController.create);
        this.router.delete('/:id', cursoController_1.cursoController.delete);
        this.router.put('/:id', cursoController_1.cursoController.update);
    }
}
const cursoRoutes = new CursoRoutes();
exports.default = cursoRoutes.router;
