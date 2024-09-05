import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("citys - GetById", () => {
  it("find one register", async () => {
    const responseOne = await testServer.post("/cidades").send({
      name: "São Paulo",
      state: "SP",
    });

    expect(responseOne.status).toBe(StatusCodes.CREATED);

    const responseTwo = await testServer
      .get(`/cidades/${responseOne.body}`)
      .send();
    expect(responseTwo.status).toEqual(StatusCodes.OK);
    expect(responseTwo.body).toHaveProperty("name");
  });

  it("find not found", async () => {
    const responseOne = await testServer.get("/cidades/999999").send();
    expect(responseOne.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(responseOne.body).toBe("errors.default");
  });
});
