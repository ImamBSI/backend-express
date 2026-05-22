import { Request, Response } from "express";
import { getCharacters } from "../services/character-service";

export async function get(req: Request, res: Response) {
  try {
    const data = await getCharacters();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch characters",
    });
  }
}