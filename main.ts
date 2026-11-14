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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
