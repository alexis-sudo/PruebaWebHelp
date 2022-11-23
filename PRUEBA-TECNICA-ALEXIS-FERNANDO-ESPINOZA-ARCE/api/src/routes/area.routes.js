import { Router } from "express";
import { methods as areaController } from "../controller/area.controller";

const router = Router();

router.get("/", areaController.getArea);
router.get("/:id", areaController.getAreaId);
router.delete("/:id", areaController.deleteAreaId);
router.put("/:id", areaController.updateArea);
router.post("/",areaController.addArea);


export default router;