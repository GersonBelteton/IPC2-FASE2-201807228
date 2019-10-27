import {Router}  from 'express';
import {auxiliarController} from '../controlers/auxiliarController';

class AuxiliarRoutes{

    router: Router = Router();

    constructor(){

        this.config();
    }

    config():void{

        this.router.get('/',auxiliarController.list);
        this.router.get('/ac',auxiliarController.listAuxiliarCurso);
         this.router.get('/:id', auxiliarController.getOne);
        this.router.post('/', auxiliarController.create);
        this.router.delete('/:id', auxiliarController.delete);
        this.router.put('/:id', auxiliarController.update);
        

        
    }
}

const auxiliarRoutes = new AuxiliarRoutes();
export default auxiliarRoutes.router;