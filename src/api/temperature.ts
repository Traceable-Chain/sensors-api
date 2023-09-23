import router from "./router";

type Timestamp = string;
type Temperature = string;

interface TemperatureResponse {
  temperatures: Record<Timestamp, Temperature>;
}

router.get<{}, TemperatureResponse>("/", (_req, res) => {
  const temperatureMap = new Map([
    ["2021-01-01T00:00:00.000Z", "-4.5"],
    ["2021-01-01T00:01:00.000Z", "23.7"],
    ["2021-01-01T00:02:00.000Z", "22.0"],
    ["2021-01-01T00:03:00.000Z", "21.5"],
    ["2021-01-01T00:04:00.000Z", "-3.0"],
    ["2021-01-01T00:05:00.000Z", "-3.5"],
    ["2021-01-01T00:06:00.000Z", "4.3"],
  ]);

  const temperatureResponse = {
    temperatures: Object.fromEntries(temperatureMap),
  };

  res.json(temperatureResponse);
});

export default router;
