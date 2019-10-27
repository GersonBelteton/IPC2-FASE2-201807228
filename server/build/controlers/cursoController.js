"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CursoController {
    /* public async list(req: Request, res: Response){
         const usuarios = await pool.query('SELECT * FROM usuario');
         res.json(usuarios);
         res.send('usuario');
 
     }*/
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM curso INNER JOIN auxiliar ON curso.idAuxiliar = auxiliar.idAuxiliar ', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('SELECT * FROM curso WHERE codigo = ?', [id], (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result[0]);
            });
            //console.log(usuarios);
            // res.send('usuario'+req.params.id);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO curso set ?', [req.body]);
            console.log(req.params[1]);
            res.json({ text: req.params[1] });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ text: 'eliminando curso' + req.params.id });
            const id = req.params.id;
            yield database_1.default.query('DELETE FROM curso WHERE codigo = ?', [id]);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ text: 'editando curso' + req.params.id });
            const id = req.params.id;
            yield database_1.default.query('UPDATE curso set ? WHERE codigo = ?', [req.body, id]);
        });
    }
}
exports.cursoController = new CursoController();
