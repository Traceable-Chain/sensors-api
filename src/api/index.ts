import MessageResponse from "../interfaces/MessageResponse";
import temperature from "./temperature";
import router from "./router";

router.get<{}, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "Welcome to the API!",
  });
});

router.use("/temperature", temperature);

export default router;
