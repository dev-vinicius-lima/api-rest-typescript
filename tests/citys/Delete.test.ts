import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("citys- Delete", () => {
  it("delete register", async () => {
    const responseOne = await testServer.post("/cidades").send({
      name: "São Paulo",
      state: "SP",
    });

    expect(responseOne.status).toBe(StatusCodes.CREATED);

    const responseTwo = await testServer
      .delete(`/cidades/${responseOne.body}`)
      .send();

    expect(responseTwo.status).toBe(StatusCodes.NO_CONTENT);
  });

  it("delete not found", async () => {
    const responseOne = await testServer.delete("/cidades/999999").send();

    expect(responseOne.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(responseOne.body).toBe("errors.default");
  });
});
