import { Router } from "express";
import { getCharacters } from "../services/character-service";

const router = Router();

router.get("/characters", async (_, res) => {
  try {
    const data = await getCharacters();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch characters",
    });
  }
});

export default router;