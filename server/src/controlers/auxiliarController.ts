import {Request, Response} from 'express';
import pool from '../database';


class AuxiliarController{
   /* public async list(req: Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios);
        res.send('usuario');

    }*/

    
    public async listAuxiliarCurso (req: Request, res: Response) {
         await pool.query('SELECT * FROM auxiliar INNER JOIN curso ON auxiliar.idAuxiliar = curso.idAuxiliar WHERE auxiliar.idAuxiliar != 0', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM auxiliar', function(err, result, fields) {
           if (err) throw err;
           res.json(result);
       });
   }
    public async getOne(req: Request, res: Response){
        const id = req.params.id;
        await pool.query('SELECT * FROM auxiliar WHERE idAuxiliar = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result[0]);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }

    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO auxiliar set ?',[req.body]);
        res.json({text:'creando auxiliar'});

    }

    public async delete(req: Request, res: Response){
        res.json({text:'eliminando auxiliar' + req.params.id});
        const id = req.params.id;
        await pool.query('DELETE FROM auxiliar WHERE idAuxiliar = ?',[id]);
    }

    public async update(req: Request, res: Response){
        res.json({text: 'editando auxiliar' + req.params.id});
        const id = req.params.id;
        await pool.query('UPDATE auxiliar set ? WHERE idAuxiliar = ?',[req.body, id])
    }
}

export const auxiliarController = new AuxiliarController();