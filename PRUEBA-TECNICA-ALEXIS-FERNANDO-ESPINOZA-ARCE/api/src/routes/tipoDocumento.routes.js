import { Router } from "express";
import { methods as tipoDocController } from "../controller/tipoDocumento.controller";

const router = Router();

router.get("/", tipoDocController.getTipoDocumento);
router.get("/:id", tipoDocController.getTipoDocumentoId);
router.delete("/:id", tipoDocController.deleteTipoDocumentoId);
router.put("/:id", tipoDocController.updateTipoDocumento);
router.post("/",tipoDocController.addTipoDocumento);


export default router;