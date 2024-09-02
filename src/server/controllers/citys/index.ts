import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as update from "./UpdateById";
import * as deleteById from "./DeleteById";

export const CitysController = {
  ...create,
  ...getAll,
  ...getById,
  ...update,
  ...deleteById,
};
