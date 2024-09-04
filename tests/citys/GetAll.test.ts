import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Citys - GetAll", () => {
  it("find all registers", async () => {
    const responseOne = await testServer.post("/cidades").send({
      name: "São Paulo",
      state: "SP",
    });

    expect(responseOne.status).toBe(StatusCodes.CREATED);

    const responseTwo = await testServer.get("/cidades").send();
    expect(responseTwo.status).toEqual(StatusCodes.OK);
    expect(responseTwo.body.length).toBeGreaterThan(0);
  });
});
