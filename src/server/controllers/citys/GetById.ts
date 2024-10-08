import { NextFunction, request, Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

interface IParamsProps {
  id: number;
}
type CustomRequest = Request & {
  params: IParamsProps;
};

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const getById = async (req: CustomRequest, res: Response) => {
  const { id } = req.params as IParamsProps;
  if (id === 999999)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "O registro não foi encontrado!",
      },
    });

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
