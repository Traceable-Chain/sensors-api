import { SENSORS_DATA_MOCK_UP } from "../data/sensorsDataMockUp";
import router from "./router";

type GeoLocation = {
  lat: number;
  lon: number;
};

type SensorType = "temperature" | "humidity" | "pressure";

interface SensorsResponse {
  sensorId: number;
  timestamp: number;
  geolocation: GeoLocation;
  value: number;
  type: SensorType;
}

router.get<{}, SensorsResponse[]>("/", (_req, res) => {
  res.json(SENSORS_DATA_MOCK_UP);
});

export default router;
