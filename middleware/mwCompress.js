import compression from "compression";

export const mwCompress = compression({
    filter: (req, res) => {
        if (req.headers["x-no-compression"]) {
          return false;
        }
        return compression.filter(req, res);
      },
      threshold: 131072, // Comprimir respuestas mayores a 128 KB
      level: 6 // Nivel de compresión (1-9)
});