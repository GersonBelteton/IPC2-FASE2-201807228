import {Request, Response} from 'express';
import pool from '../database';


class CursoController{
   /* public async list(req: Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios);
        res.send('usuario');

    }*/


    public async list (req: Request, res: Response) {
         await pool.query('SELECT * FROM curso INNER JOIN auxiliar ON curso.idAuxiliar = auxiliar.idAuxiliar '
         , function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    

                    
    public async getOne(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM curso WHERE codigo = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result[0]);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }




    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO curso set ?',[req.body]);
        console.log(req.params[1]);
        res.json({text:req.params[1]});

    }



    public async delete(req: Request, res: Response){
        res.json({text:'eliminando curso' + req.params.id});
        const id = req.params.id;
        
        await pool.query('DELETE FROM curso WHERE codigo = ?',[id]);
    }

    public async update(req: Request, res: Response){
        res.json({text: 'editando curso' + req.params.id});
        const id = req.params.id;
        await pool.query('UPDATE curso set ? WHERE codigo = ?',[req.body, id])
    }

   
}

export const cursoController = new CursoController();