"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controlers/loginController");
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', loginController_1.loginController.login);
        this.router.post('/log2', loginController_1.loginController.login2);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
