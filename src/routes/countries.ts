import { Request, Response } from "express";
import { getCountries } from "../services/country-service";

export async function get(req: Request, res: Response) {
  try {
    const data = await getCountries();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch countries",
      error,
    });
  }
}