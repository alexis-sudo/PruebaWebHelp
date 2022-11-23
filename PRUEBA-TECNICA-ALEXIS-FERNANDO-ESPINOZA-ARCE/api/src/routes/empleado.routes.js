import { Router } from "express";
import { methods as empleadoController } from "../controller/empleado.controller";

const router = Router();

router.get("/", empleadoController.getEmpleado);
router.get("/:id", empleadoController.getEmpleadoId);
router.delete("/:id", empleadoController.deleteEmpleadoId);
router.put("/:id", empleadoController.updateEmpleado);
router.post("/",empleadoController.addEmpleado);
router.get("/:nombre", empleadoController.getEmpleadoNombre);
router.get("/:doc", empleadoController.getEmpleadoDoc);

export default router;