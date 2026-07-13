import { loadEnvFile } from "node:process";

try {
  loadEnvFile();
} catch (error) {
  console.log(
    "Aviso: No se encontró el archivo .env, usando variables del entorno.",
  );
}

export const {
  PORT,
  GOOGLEAI_API_KEY,
  GOOGLEAI_MODEL,
  API_V1 = "/api/v1",
} = process.env;
