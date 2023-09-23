import { TEMPERATURES_MOCK_UP } from "../data/temperaturesMockUp";
import router from "./router";

type Timestamp = string;
type Temperature = string;

interface TemperatureResponse {
  temperatures: Record<Timestamp, Temperature>;
}

router.get<{}, TemperatureResponse>("/", (_req, res) => {
  const temperatureMap = TEMPERATURES_MOCK_UP.map(
    ([timestamp, temperature]) => [timestamp, temperature]
  );

  const temperatureResponse = {
    temperatures: Object.fromEntries(temperatureMap),
  };

  res.json(temperatureResponse);
});

export default router;
