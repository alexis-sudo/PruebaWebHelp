import {getConnection} from "../database/database"

const getTipoDocumento = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipodocumento");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getTipoDocumentoId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipodocumento where IDTIPODOCUMENTO = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const deleteTipoDocumentoId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        await connection.query("delete FROM tipodocumento where IDTIPODOCUMENTO = ?", id);
        res.json({message:"deleted"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addTipoDocumento = async (req,res)=>{
    try {
        const { documento, longitud} = req.body;

        if (documento === undefined || longitud === undefined) {
            res.status(400).json({message:"bad request"});
        }

        const connection = await getConnection();
        await connection.query("insert into tipodocumento (DOCUMENTO, LONGITUD, FECHAINSERTO,BORRADO)VALUES(?,?,CURDATE(),0)",[documento,longitud]);
        res.json({message:"added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateTipoDocumento = async (req,res)=>{
    try {
        const {id} = req.params;
        const {documento, longitud} = req.body;

        if (documento === undefined || longitud === undefined) {
            res.status(400).json({message:"bad request"});
        }

        const connection = await getConnection();
        await connection.query('update tipodocumento set DOCUMENTO = ?, LONGITUD = ? WHERE IDTIPODOCUMENTO = ?',[documento,longitud,id]);
        res.json({message:"UPDATED"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getTipoDocumento,
    addTipoDocumento,
    getTipoDocumentoId,
    updateTipoDocumento,
    deleteTipoDocumentoId
}