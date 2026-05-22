import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,

  RICK_AND_MORTY_API: process.env.RICK_AND_MORTY_API || "",

  COUNTRIES_API: process.env.COUNTRIES_API || "",
};