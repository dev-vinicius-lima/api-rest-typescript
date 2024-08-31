import { Router } from "express";
import { CitysController } from "../controllers";
import { createValidation } from "../controllers/citys/Create";
import { getAllValidation } from "../controllers/citys/GetAll";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Hello World!");
});

router.get("/cidades", getAllValidation, CitysController.getAll);
router.post("/cidades", createValidation, CitysController.create);

export { router };
