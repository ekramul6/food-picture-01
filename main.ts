// food-picture-01: the best-looking food picture — a wood-fired margherita pizza cheese pull.
// food-picture-01 entry (Node 22, standard library only).
// The image beside this file is copied to the output path, byte for byte.
// A pure copy is deterministic by construction: no timestamps, no random
// bytes, so two runs write identical files. The image itself is a close-up
// food photograph: a hand lifting a slice of wood-fired margherita pizza
// from the whole pie, long strands of molten mozzarella stretching,
// blistered leopard-spotted crust, glossy tomato sauce, fresh basil and
// olive oil, with the warm glow of the oven's embers behind and steam
// rising. One clear focal point, warm dramatic light, and a dish that
// reads clearly even at 300 pixels across.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const srcPath = new URL('./entry.png', import.meta.url);
const outPath = join(outDir, 'entry.png');
copyFileSync(srcPath, outPath);

// Verify the copy: read the output back and fail loudly if its size does
// not match the source, so a truncated or failed copy is caught here
// instead of silently shipping a broken image to the gate.
if (statSync(outPath).size !== statSync(srcPath).size) {
  console.error('entry.png copy failed: output size does not match source');
  process.exit(1);
}
