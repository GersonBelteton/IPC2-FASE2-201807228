"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketController_1 = require("../controlers/ticketController");
class TicketRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ticketController_1.ticketController.list);
        this.router.get('/:id', ticketController_1.ticketController.getOne);
        this.router.get('/test/:id', ticketController_1.ticketController.getTicketsEst);
        this.router.post('/', ticketController_1.ticketController.create);
        this.router.delete('/:id', ticketController_1.ticketController.delete);
        this.router.put('/:id', ticketController_1.ticketController.update);
    }
}
const ticketRoutes = new TicketRoutes();
exports.default = ticketRoutes.router;
