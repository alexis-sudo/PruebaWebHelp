import {getConnection} from "../database/database"

const getEmpleado = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT E.IDEMPLEADO, CONCAT(E.PRIMERNOMBRE,' ',E.SEGUNDONOMBRE) AS 'NOMBRES',CONCAT( E.PRIMERAPELLIDO,' ',E.SEGUNDOAPELLIDO) AS 'APELLIDOS',E.NDOCUMENTO, TP.DOCUMENTO, A.AREA,SA.SUBAREA,E.FECHAINSERTO FROM empleado AS E INNER JOIN tipodocumento AS TP ON E.FKTIPODOCUMENTO = TP.IDTIPODOCUMENTO INNER JOIN subarea AS SA ON E.FKSUBAREA = SA.IDSUBAREA INNER JOIN area AS A ON SA.FKAREA = A.IDAREA WHERE E.BORRADO = 0 ");
        res.status(200);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getEmpleadoId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleado where IDEMPLEADO = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const deleteEmpleadoId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        await connection.query("delete FROM empleado where IDEMPLEADO = ?", id);
        res.json({message:"deleted"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addEmpleado = async (req,res)=>{
    try {
        const { primerNombre, segundoNombre, primerApellido,segundoApellido, nDocumento,fkTipoDocumento,fkSubArea} = req.body;

        if (primerNombre === undefined || segundoNombre === undefined ||
            primerApellido === undefined || segundoApellido === undefined || 
            nDocumento === undefined || fkTipoDocumento === undefined || fkSubArea === undefined) {
            res.status(400).json({message:"bad request"});
        }

        const connection = await getConnection();
        await connection.query("insert into empleado (PRIMERNOMBRE,SEGUNDONOMBRE,PRIMERAPELLIDO,SEGUNDOAPELLIDO,NDOCUMENTO,FKTIPODOCUMENTO,FKSUBAREA,FECHAINSERTO,BORRADO)VALUES(?,?,?,?,?,?,?,CURDATE(),0)",[primerNombre, segundoNombre, primerApellido,segundoApellido, nDocumento,fkTipoDocumento,fkSubArea]);
        res.json({message:"added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateEmpleado = async (req,res)=>{
    try {
        const {id} = req.params;
        const { primerNombre, segundoNombre, primerApellido,segundoApellido, nDocumento,fkTipoDocumento,fkSubArea} = req.body;

        if (primerNombre === undefined || segundoNombre === undefined ||
            primerApellido === undefined || segundoApellido === undefined || 
            nDocumento === undefined || fkTipoDocumento === undefined || fkSubArea === undefined) {
            res.status(400).json({message:"bad request"});
        }

        const connection = await getConnection();
        await connection.query('update empleado set PRIMERNOMBRE = ?,SEGUNDONOMBRE = ?,PRIMERAPELLIDO = ?,SEGUNDOAPELLIDO = ?,NDOCUMENTO = ?,FKTIPODOCUMENTO = ?,FKSUBAREA = ? WHERE IDEMPLEADO = ?',[primerNombre, segundoNombre, primerApellido,segundoApellido, nDocumento,fkTipoDocumento,fkSubArea,id]);
        res.json({message:"UPDATED"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getEmpleadoNombre = async (req,res)=>{
    try {
        const {nombre} = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleado where NOMBRE = ?", nombre);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getEmpleadoDoc = async (req,res)=>{
    try {
        const {doc} = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleado where NDOCUMENTO = ?", doc);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const methods = {
    getEmpleado,
    addEmpleado,
    getEmpleadoId,
    updateEmpleado,
    deleteEmpleadoId,
    getEmpleadoNombre,
    getEmpleadoDoc
}