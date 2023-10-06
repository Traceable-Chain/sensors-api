import MessageResponse from "../interfaces/MessageResponse";
import sensors from "./sensors";
import router from "./router";

router.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "Welcome to the API!",
  });
});

router.use("/sensors", sensors);

export default router;
