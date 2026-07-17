import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const source = process.argv[2];
const outputDirectory = process.argv[3] ?? 'public/images/projects';

if (!source) {
  throw new Error('Usage: node scripts/split-gallery.mjs <source-image> [output-directory]');
}

const scenes = [
  { name: 'plumber-bathroom-portrait', left: 0, top: 0, width: 433, height: 433 },
  { name: 'toilet-supply-repair', left: 441, top: 0, width: 431, height: 433 },
  { name: 'under-sink-repair', left: 880, top: 0, width: 436, height: 433 },
  { name: 'kitchen-faucet-repair', left: 0, top: 442, width: 433, height: 348 },
  { name: 'copper-pipe-maintenance', left: 441, top: 442, width: 431, height: 348 },
  { name: 'sink-drain-repair', left: 880, top: 442, width: 436, height: 348 },
  { name: 'bathtub-fixture-repair', left: 0, top: 798, width: 350, height: 397 },
  { name: 'outdoor-pipe-repair', left: 359, top: 798, width: 341, height: 397 },
  { name: 'digital-plumbing-inspection', left: 709, top: 798, width: 282, height: 397 },
  { name: 'water-heater-specialist', left: 999, top: 798, width: 317, height: 397 }
];

await fs.mkdir(outputDirectory, { recursive: true });

await Promise.all(
  scenes.map(async (scene) => {
    const destination = path.join(outputDirectory, `${scene.name}.webp`);

    await sharp(source)
      .extract(scene)
      .resize({
        width: 1600,
        height: 1600,
        fit: 'inside',
        kernel: sharp.kernel.lanczos3
      })
      .sharpen({ sigma: 0.6 })
      .webp({ quality: 88, effort: 6, smartSubsample: true })
      .toFile(destination);
  })
);

console.log(`Created ${scenes.length} gallery scenes in ${outputDirectory}`);
