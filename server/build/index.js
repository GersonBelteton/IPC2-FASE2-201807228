"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const auxiliarRoutes_1 = __importDefault(require("./routes/auxiliarRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const cursoRoutes_1 = __importDefault(require("./routes/cursoRoutes"));
const ticketRoutes_1 = __importDefault(require("./routes/ticketRoutes"));
const mensajeRoutes_1 = __importDefault(require("./routes/mensajeRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/user', studentRoutes_1.default);
        this.app.use('/login', loginRoutes_1.default);
        this.app.use('/auxiliar', auxiliarRoutes_1.default);
        this.app.use('/curso', cursoRoutes_1.default);
        this.app.use('/mensaje', mensajeRoutes_1.default);
        this.app.use('/ticket', ticketRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
