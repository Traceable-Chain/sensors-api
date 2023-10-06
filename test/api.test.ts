import request from "supertest";
import app from "../src/app";
import { SENSORS_DATA_MOCK_UP } from "../src/data/sensorsDataMockUp";

describe("GET /api/v1/temperature", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/v1/sensors")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { data: SENSORS_DATA_MOCK_UP }, done);
  });
});
