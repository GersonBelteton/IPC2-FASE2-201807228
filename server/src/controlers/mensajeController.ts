import {Request, Response} from 'express';
import pool from '../database';


class MensajeController{
   /* public async list(req: Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios);
        res.send('usuario');

    }*/


    public async list (req: Request, res: Response) {
         await pool.query('SELECT * FROM mensaje', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }





                    
    public async getOne(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM mensaje WHERE idMensaje = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result[0]);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }

    public async getMensajesAux(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM mensaje INNER JOIN auxiliar ON mensaje.idAuxiliar = auxiliar.idAuxiliar INNER JOIN estudiante ON mensaje.idEstudiante = estudiante.idEstudiante WHERE auxiliar.idAuxiliar = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }


    public async getMensajesEst(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM mensaje INNER JOIN auxiliar ON mensaje.idAuxiliar = auxiliar.idAuxiliar INNER JOIN estudiante ON mensaje.idEstudiante = estudiante.idEstudiante WHERE estudiante.idEstudiante = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }


    

    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO mensaje set ?',[req.body]);
        console.log(req.params[1]);
        res.json({text:req.params[1]});

    }



    public async delete(req: Request, res: Response){
        res.json({text:'eliminando mensaje' + req.params.id});
        const id = req.params.id;
        
        await pool.query('DELETE FROM mensaje WHERE idMensaje = ?',[id]);
    }

    public async update(req: Request, res: Response){
        res.json({text: 'editando mensaje' + req.params.id});
        const id = req.params.id;
        await pool.query('UPDATE mensaje set ? WHERE idMensaje = ?',[req.body, id])
    }

   
}

export const mensajeController = new MensajeController();