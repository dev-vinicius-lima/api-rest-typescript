import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CitysController } from "../controllers";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Hello World!");
});

router.post("/citys", CitysController.create);

export { router };
