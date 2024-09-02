import { Router } from "express";
import { CitysController } from "../controllers";
import { createValidation } from "../controllers/citys/Create";
import { getAllValidation } from "../controllers/citys/GetAll";
import { getByIdValidation } from "../controllers/citys/GetById";
import { UpdateByIdValidation } from "../controllers/citys/UpdateById";
import { deleteByIdValidation } from "../controllers/citys/DeleteById";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Hello World!");
});

router.get("/cidades", getAllValidation, CitysController.getAll);
router.post("/cidades", createValidation, CitysController.create);
router.get("/cidades/:id", getByIdValidation, CitysController.getById);
router.put("/cidades/:id", UpdateByIdValidation, CitysController.UpdateById);
router.delete("/cidades/:id", deleteByIdValidation, CitysController.deleteById);

export { router };
