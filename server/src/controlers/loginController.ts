import {Request, Response} from 'express';
import pool from '../database';


class LoginController{
   /* public async list(req: Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios);
        res.send('usuario');

    }*/



    public async login(req: Request, res: Response){
        const user = {
            email: req.body.correo,
            password: req.body.contrasena
        }

        

        await pool.query('SELECT * FROM estudiante WHERE correo = ? and contrasena = ? ',[user.email, user.password], (err, result, fields)=>{
            if (err) throw err
                console.log('hay un error en backend')
             //   this.login2(req, res);
        
                console.log('hola')
                res.json(result[0]);
            
        });


    }

    public async login2(req: Request, res: Response){
        const user = {
            email: req.body.correo,
            password: req.body.contrasena
        }

        

        await pool.query('SELECT * FROM auxiliar WHERE correo = ? and contrasena = ? ',[user.email, user.password], (err, result, fields)=>{
            if (err) throw err;
            
            res.json(result[0]);
        });


    }
}

export const loginController = new LoginController();