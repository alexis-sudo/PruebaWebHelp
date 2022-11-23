import { Router } from "express";
import { methods as areaController } from "../controller/subArea.controller";

const router = Router();

router.get("/", areaController.getSubArea);
router.get("/:id", areaController.getSubAreaId);
router.delete("/:id", areaController.deleteSubAreaId);
router.put("/:id", areaController.updateSubArea);
router.post("/",areaController.addSubArea);


export default router;