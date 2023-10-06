import { SENSORS_DATA_MOCK_UP } from "../data/sensorsDataMockUp";
import router from "./router";

type GeoLocation = {
  latitude: number;
  longitude: number;
};

type SensorType = "temperature" | "humidity" | "pressure";

interface SensorsResponse {
  data: {
    sensorId: string;
    timestamp: string;
    geoLocation: GeoLocation;
    value: number;
    type: SensorType;
  }[];
}

router.get<{}, SensorsResponse>("/", (_req, res) => {
  res.json({
    data: SENSORS_DATA_MOCK_UP,
  });
});

export default router;
