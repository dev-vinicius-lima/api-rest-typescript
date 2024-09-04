import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

interface IParamsProps {
  id?: number;
}
export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
  if (Number(req.params.id === 999999))
    return res.status(StatusCodes.NO_CONTENT).json({
      errors: {
        default: "O registro não foi encontrado!",
      },
    });

  return res.status(StatusCodes.NO_CONTENT).send();
};
