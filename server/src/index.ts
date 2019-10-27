import express, {Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'
import studentRoutes from './routes/studentRoutes'
import auxiliarRoutes from './routes/auxiliarRoutes'
import loginRoutes from './routes/loginRoutes'
import cursoRoutes from './routes/cursoRoutes'
import ticketRoutes from './routes/ticketRoutes'
import mensajeRoutes from './routes/mensajeRoutes'

class Server{
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    
    }


    config(): void{
        this.app.set('port', process.env.PORT||3000)
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/user',studentRoutes);
        this.app.use('/login',loginRoutes);
        this.app.use('/auxiliar',auxiliarRoutes);
        this.app.use('/curso',cursoRoutes);
        this.app.use('/mensaje',mensajeRoutes);
        this.app.use('/ticket',ticketRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port '+this.app.get('port'));
        })
    }

}
const server = new Server()
server.start();
