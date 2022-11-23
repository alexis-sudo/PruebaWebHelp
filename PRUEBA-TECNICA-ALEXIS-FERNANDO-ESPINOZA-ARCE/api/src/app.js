import express from "express";
import morgan from "morgan";
import cors from "cors";

//router
import areaRoutes from "./routes/area.routes"
import subAreaRoutes from "./routes/subArea.routes"
import tipoDocRoutes from "./routes/tipoDocumento.routes"
import empleadoRoutes from "./routes/empleado.routes"

const app = express();

const Puerto = process.env.PORT || 4000;

//settings 
app.set("port",Puerto);

const whitelist = ['http://localhost:3000']
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: whitelist}))

//routes 
app.use("/api/area",areaRoutes);
app.use("/api/subarea",subAreaRoutes);
app.use("/api/tipodocumento",tipoDocRoutes);
app.use("/api/empleado",empleadoRoutes)
export default app;