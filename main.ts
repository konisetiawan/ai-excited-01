// Entry driver for ai-excited-01: copies the bundled image verbatim to the requested output directory.
// A whale bursts from a snow globe; the judge inspects exactly the bytes we copy.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const imagePath = join(import.meta.dirname, 'assets', 'entry.png');
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(imagePath, join(outputDirectory, 'entry.png'));