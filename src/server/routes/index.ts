import { Router } from "express";
import { CitysController } from "../controllers";
import { createValidation } from "../controllers/citys/Create";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Hello World!");
});

router.post("/citys", createValidation, CitysController.create);

export { router };
