import { Router } from "express";
import { getCountries } from "../../services/country-service";

const router = Router();

router.get("/countries", async (_, res) => {
  try {
    const data = await getCountries();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch countries",
    });
  }
});

export default router;