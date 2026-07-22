import { loadEnvFile } from "node:process";
import { parse } from "valibot";
import { EnvSchema } from "@/schemas/env.ts";

try {
  loadEnvFile();
} catch (error) {
  console.log(
    "Aviso: No se encontró el archivo .env, usando variables del entorno.",
  );
}

const env = parse(EnvSchema, {
  PORT: process.env.PORT,
  GOOGLEAI_API_KEY: process.env.GEMINI_API_KEY,
  GOOGLEAI_MODEL: process.env.GOOGLEAI_MODEL,
  API_V1: process.env.API_V1 ?? "/api/v1",
});

export const { PORT, GOOGLEAI_API_KEY, GOOGLEAI_MODEL, API_V1 } = env;
