import {getConnection} from "../database/database"

const getSubArea = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM subarea");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getSubAreaId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM subarea where FKAREA = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const deleteSubAreaId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        await connection.query("delete FROM subarea where IDSUBAREA = ?", id);
        res.json({message:"deleted"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addSubArea = async (req,res)=>{
    try {
        const { subArea, fkArea} = req.body;

        if (subArea === undefined || fkArea === undefined) {
            res.status(400).json({message:"bad request"});
        }


        const connection = await getConnection();
        await connection.query("insert into subarea (SUBAREA, FKAREA, FECHAINSERTO,BORRADO)VALUES(?,?,CURDATE(),0)",[subArea,fkArea]);
        res.json({message:"added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateSubArea = async (req,res)=>{
    try {
        const {id} = req.params;
        const {subArea,fkArea} = req.body;

        if (subArea === undefined || id === undefined) {
            res.status(400).json({message:"bad request"});
        }

        const connection = await getConnection();
        await connection.query('update subarea set SUBAREA = ?, FKAREA = ? WHERE IDSUBAREA = ?',[subArea,fkArea,id]);
        res.json({message:"UPDATED"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}




export const methods = {
    getSubArea,
    addSubArea,
    getSubAreaId,
    updateSubArea,
    deleteSubAreaId
}