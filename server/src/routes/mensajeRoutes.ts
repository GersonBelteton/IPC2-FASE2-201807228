import {Router}  from 'express';
import {mensajeController} from '../controlers/mensajeController';

class MensajeRoutes{

    router: Router = Router();

    constructor(){

        this.config();
    }

    config():void{

        this.router.get('/',mensajeController.list);
         this.router.get('/:id', mensajeController.getOne);
         this.router.get('/maux/:id', mensajeController.getMensajesAux);
         this.router.get('/mest/:id', mensajeController.getMensajesEst);
        this.router.post('/', mensajeController.create);
        this.router.delete('/:id', mensajeController.delete);
        this.router.put('/:id', mensajeController.update);
        

        
    }
}

const mensajeRoutes = new MensajeRoutes();
export default mensajeRoutes.router;