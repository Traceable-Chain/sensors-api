export const SENSORS_DATA_MOCK_UP = [
  {
    sensorId: 1,
    timestamp: Date.parse("2021-01-01T00:00:00.000Z"),
    geolocation: {
      lat: 51.5074,
      lon: 0.1278,
    },
    value: 10,
    type: "temperature" as const,
  },
  {
    sensorId: 2,
    timestamp: Date.parse("2021-01-02T12:30:00.000Z"),
    geolocation: {
      lat: 40.7128,
      lon: -74.006,
    },
    value: 25,
    type: "humidity" as const,
  },
  {
    sensorId: 3,
    timestamp: Date.parse("2021-01-03T06:45:00.000Z"),
    geolocation: {
      lat: 34.0522,
      lon: -118.2437,
    },
    value: 1000,
    type: "pressure" as const,
  },
  {
    sensorId: 4,
    timestamp: Date.parse("2021-01-15T23:59:59.000Z"),
    geolocation: {
      lat: 28.7041,
      lon: -81.4637,
    },
    value: 15,
    type: "temperature" as const,
  },
  {
    sensorId: 5,
    timestamp: Date.parse("2021-02-05T08:15:00.000Z"),
    geolocation: {
      lat: 51.5074,
      lon: 0.1278,
    },
    value: 12,
    type: "humidity" as const,
  },
  {
    sensorId: 6,
    timestamp: Date.parse("2021-02-18T16:30:00.000Z"),
    geolocation: {
      lat: 40.7128,
      lon: -74.006,
    },
    value: 980,
    type: "pressure" as const,
  },
  {
    sensorId: 7,
    timestamp: Date.parse("2021-03-10T14:20:00.000Z"),
    geolocation: {
      lat: 34.0522,
      lon: -118.2437,
    },
    value: 18,
    type: "temperature" as const,
  },
  {
    sensorId: 8,
    timestamp: Date.parse("2021-03-25T20:45:00.000Z"),
    geolocation: {
      lat: 28.7041,
      lon: -81.4637,
    },
    value: 22,
    type: "humidity" as const,
  },
  {
    sensorId: 9,
    timestamp: Date.parse("2021-04-12T04:10:00.000Z"),
    geolocation: {
      lat: 52.52,
      lon: 13.405,
    },
    value: 1020,
    type: "pressure" as const,
  },
  {
    sensorId: 10,
    timestamp: Date.parse("2021-04-28T12:55:00.000Z"),
    geolocation: {
      lat: 48.8566,
      lon: 2.3522,
    },
    value: 14,
    type: "temperature" as const,
  },
];
