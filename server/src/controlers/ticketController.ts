import {Request, Response} from 'express';
import pool from '../database';


class TicketController{
   /* public async list(req: Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios);
        res.send('usuario');

    }*/


    public async list (req: Request, res: Response) {
         await pool.query('SELECT * FROM ticket  INNER JOIN estudiante ON ticket.idEstudiante = estudiante.idEstudiante', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }



    public async getTicketsEst(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM ticket  INNER JOIN estudiante ON ticket.idEstudiante = estudiante.idEstudiante WHERE estudiante.idEstudiante = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }

                    
    public async getOne(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM ticket WHERE idTicket = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result[0]);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }

 


    

    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO ticket set ?',[req.body]);
        console.log(req.params[1]);
        res.json({text:req.params[1]});

    }



    public async delete(req: Request, res: Response){
        res.json({text:'eliminando ticket' + req.params.id});
        const id = req.params.id;
        
        await pool.query('DELETE FROM ticket WHERE idTicket = ?',[id]);
    }

    public async update(req: Request, res: Response){
        res.json({text: 'editando ticket' + req.params.id});
        const id = req.params.id;
        await pool.query('UPDATE ticket set ? WHERE idTicket = ?',[req.body, id])
    }

   
}

export const ticketController = new TicketController();