import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Citys-Create", () => {
  it("create register", async () => {
    const responseOne = await testServer
      .post("/cidades")
      .send({ name: "São Paulo", state: "SP" });

    expect(responseOne.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(typeof responseOne.body).toBe("object");
  });
});
