import {Router}  from 'express';
import {studentController} from '../controlers/studentController';
import {loginController} from '../controlers/loginController';
class LoginRoutes{

    router: Router = Router();

    constructor(){

        this.config();
    }

    config():void{



        this.router.post('/',loginController.login);
        this.router.post('/log2',loginController.login2);
        
    }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;