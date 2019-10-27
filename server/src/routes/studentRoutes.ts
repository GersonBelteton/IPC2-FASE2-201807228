import {Router}  from 'express';
import {studentController} from '../controlers/studentController';

class StudentRoutes{

    router: Router = Router();

    constructor(){

        this.config();
    }

    config():void{

        this.router.get('/',studentController.list);
        this.router.get('/ec/:id', studentController.getEstudianteCursos);
        this.router.get('/email/:id', studentController.getOneN);
         this.router.get('/:id', studentController.getOne);
         
        this.router.post('/', studentController.create);
        this.router.post('/aec', studentController.asignacion);
        this.router.delete('/:id', studentController.delete);
        this.router.delete('/aec/:id', studentController.deleteAsignacion);
        this.router.put('/:id', studentController.update);
        

        
    }
}

const studentRoutes = new StudentRoutes();
export default studentRoutes.router;