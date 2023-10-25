import { SENSORS_DATA_MOCK_UP } from "../data/sensorsDataMockUp";
import router from "./router";

type GeoLocation = {
  lat: number;
  lon: number;
};

// type SensorType = "Temperature" | "Humidity" | "Pressure" | "Digital";

interface SensorsResponse {
  id: number;
  timestamp: number;
  geolocation: GeoLocation;
  value: number;
  // type_: SensorType;
  type_: number;
}

router.get<{}, SensorsResponse[]>("/", (_req, res) => {
  res.json(SENSORS_DATA_MOCK_UP);
});

export default router;
