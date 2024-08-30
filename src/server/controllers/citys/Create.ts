import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  name: string;
}
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validateData: ICidade;
  try {
    validateData = await bodyValidation.validate(req.body);
    return res.status(StatusCodes.CREATED).send(validateData);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors });
    }
  }
};
