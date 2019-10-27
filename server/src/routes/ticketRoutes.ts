import {Router}  from 'express';
import {ticketController} from '../controlers/ticketController';

class TicketRoutes{

    router: Router = Router();

    constructor(){

        this.config();
    }

    config():void{

        this.router.get('/',ticketController.list);
         this.router.get('/:id', ticketController.getOne);
         this.router.get('/test/:id', ticketController.getTicketsEst);
        this.router.post('/', ticketController.create);
        this.router.delete('/:id', ticketController.delete);
        this.router.put('/:id', ticketController.update);
        

        
    }
}

const ticketRoutes = new TicketRoutes();
export default ticketRoutes.router;