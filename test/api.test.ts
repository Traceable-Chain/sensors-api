import request from "supertest";
import app from "../src/app";
import { TEMPERATURES_MOCK_UP } from "../src/data/temperaturesMockUp";

describe("GET /api/v1/temperature", () => {
  it("responds with a json message", (done) => {
    const expectedTemperatures = Object.fromEntries(TEMPERATURES_MOCK_UP);

    request(app)
      .get("/api/v1/temperature")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { temperatures: expectedTemperatures }, done);
  });
});
