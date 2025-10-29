// thumbnail-generator.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "public/cardsOriginal");
const outputDir = path.join(__dirname, "public/cards");
const thumbSize = { width: 400 };

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const files = fs.readdirSync(inputDir);
for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    await sharp(inputPath).resize(thumbSize).toFile(outputPath);
    console.log(`✅ Created thumbnail: ${file}`);
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err);
  }
}
