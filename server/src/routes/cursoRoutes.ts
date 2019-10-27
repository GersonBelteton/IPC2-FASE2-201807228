import {Router}  from 'express';
import {cursoController} from '../controlers/cursoController';

class CursoRoutes{

    router: Router = Router();

    constructor(){

        this.config();
    }

    config():void{

        this.router.get('/',cursoController.list);
         this.router.get('/:id', cursoController.getOne);
         
        this.router.post('/', cursoController.create);
        this.router.delete('/:id', cursoController.delete);
        this.router.put('/:id', cursoController.update);
        

        
    }
}

const cursoRoutes = new CursoRoutes();
export default cursoRoutes.router;