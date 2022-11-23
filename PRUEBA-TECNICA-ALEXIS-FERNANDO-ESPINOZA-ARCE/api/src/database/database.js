import mysqls from "promise-mysql"
import config  from "../config";

const connection = mysqls.createConnection({
    user: config.user,
    host: config.host,
    database :config.database,
    password: config.password
})

const getConnection= ()=>{
    return connection;
}

module.exports = {
    getConnection
}