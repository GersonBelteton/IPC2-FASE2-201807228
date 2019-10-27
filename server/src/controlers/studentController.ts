import {Request, Response} from 'express';
import pool from '../database';


class StudentController{
   /* public async list(req: Request, res: Response){
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios);
        res.send('usuario');

    }*/


    public async list (req: Request, res: Response) {
         await pool.query('SELECT * FROM estudiante', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async asignacion(req: Request, res: Response){
        const {idEstudiante, codigoCurso} = req.body;
        const query = 'CALL asignacionEC(?,?)'
        await pool.query(query ,[idEstudiante, codigoCurso]);
        console.log(req.params[1]);
        res.json({text:req.params[1]});

    }


    public async getEstudianteCursos(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM estudiante INNER JOIN asignacionec ON estudiante.idEstudiante = asignacionec.idEstudiante  INNER JOIN  curso ON asignacionec.codigoCurso = curso.codigo WHERE estudiante.idEstudiante = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result);
        });
 

    }

                    
    public async getOne(req: Request, res: Response){
        const id = req.params.id;
    
        await pool.query('SELECT * FROM estudiante WHERE idEstudiante = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            res.json(result[0]);
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }



    public async getOneN(req: Request, res: Response){
        const id = req.params.id;
        await pool.query('SELECT * FROM estudiante WHERE correo = ?',[id], (err, result, fields)=>{
         
            if (err) throw err;
            
            res.json(result[0]);
        
        });
        //console.log(usuarios);
       // res.send('usuario'+req.params.id);

    }

    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO estudiante set ?',[req.body]);
        console.log(req.params[1]);
        res.json({text:req.params[1]});

    }

    public async deleteAsignacion(req: Request, res: Response){
        res.json({text:'eliminando asignación' + req.params.id});
        const id = req.params.id;
        
        await pool.query('DELETE FROM asignacionec WHERE idAsignacionCE = ?',[id]);
    }

    public async delete(req: Request, res: Response){
        res.json({text:'eliminando estudiante' + req.params.id});
        const id = req.params.id;
        
        await pool.query('DELETE FROM estudiante WHERE idEstudiante = ?',[id]);
    }

    public async update(req: Request, res: Response){
        res.json({text: 'editando estudiante' + req.params.id});
        const id = req.params.id;
        await pool.query('UPDATE estudiante set ? WHERE idEstudiante = ?',[req.body, id])
    }

   
}

export const studentController = new StudentController();