import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Citys - UpdateById", () => {
  it("update register", async () => {
    const responseOne = await testServer
      .post("/cidades")
      .send({ name: "São Paulo", state: "SP" });

    expect(responseOne.status).toBe(StatusCodes.CREATED);

    const responseTwo = await testServer
      .put(`/cidades/${responseOne.body}`)
      .send({ name: "São Paulo2", state: "SP" });
    expect(responseTwo.status).toBe(StatusCodes.OK);
    expect(responseTwo.body).toHaveProperty("name");
  });

  it("update not found", async () => {
    const responseOne = await testServer
      .put("/cidades/999999")
      .send({ name: "São Paulo", state: "SP" });
    expect(responseOne.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(responseOne.body).toBe("errors.default");
  });
});
