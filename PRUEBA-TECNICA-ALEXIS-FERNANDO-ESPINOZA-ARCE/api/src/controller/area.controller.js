import {getConnection} from "../database/database"

const getArea = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT IDAREA,AREA from area WHERE BORRADO = 0");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getAreaId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM area where IDAREA = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const deleteAreaId = async (req,res)=>{
    try {
        const {id} = req.params;

        const connection = await getConnection();
        await connection.query("delete FROM area where IDAREA = ?", id);
        res.json({message:"deleted"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateArea = async (req,res)=>{
    try {
        const {id} = req.params;
        const {area} = req.body;

        if (area === undefined || id === undefined) {
            res.status(400).json({message:"bad request"});
        }

        const obj = {area};

        const connection = await getConnection();
        const quer = `update area set AREA = '${area}' WHERE IDAREA = ${id}`
        await connection.query(quer);
        res.json({message:"UPDATED"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const addArea = async (req,res)=>{
    try {
        const { area} = req.body;
        if (area === undefined) {
            res.status(400).json({message:"bad request"});
        }


        const connection = await getConnection();
        await connection.query("insert into area (AREA, FECHAINSERTO,BORRADO)VALUES(?,CURDATE(),0)",area);
        res.json({message:"added"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getArea,
    addArea,
    getAreaId,
    updateArea,
    deleteAreaId
}