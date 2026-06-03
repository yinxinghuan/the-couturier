// The Couturier — node tree (15 nodes, 8 endings).
//
//   root: Yu Han 在三面镜前, 你在背后, 软尺挂脖, 大头针在手
//   ├── A "the waist"               🪡 量腰
//   │   ├── AA "lower — the hips"
//   │   │   ├── AAA "her hair falls"     → 💖 sensual
//   │   │   └── AAB "the click"          → 👹 horror
//   │   └── AB "loosen the back lacing"
//   │       ├── ABA "your palm stays"    → 💖 sensual
//   │       └── ABB "the slow shadow"    → 👹 horror
//   └── B "the neck"                🪡 调领口
//       ├── BA "lift higher"
//       │   ├── BAA "she leans in"       → 💖 sensual
//       │   └── BAB "the fabric returns" → 👹 horror
//       └── BB "drop lower"
//           ├── BBA "she waits"          → 💖 sensual
//           └── BBB "six tally marks"    → 👹 horror

import type { EndingType, NodeDef, ChoiceDef } from './types';

export const ROOT_ID = 'root';

function parentOf(id: string): string | null {
  if (id === 'root') return null;
  if (id.length === 1) return 'root';
  return id.slice(0, -1);
}

function posterFor(id: string): string {
  const p = parentOf(id);
  return p ? `${p}_end.png` : 'root_start.png';
}

function branch(id: string, a: ChoiceDef, b: ChoiceDef): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    choices: [a, b],
  };
}

function ending(id: string, type: EndingType): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    isEnding: true,
    endingType: type,
    endingTitleKey: `ending.${id}.title`,
    endingTaglineKey: `ending.${id}.tagline`,
  };
}

const ch = (labelKey: string, nextId: string, pinX: number, pinY: number): ChoiceDef =>
  ({ labelKey, nextId, pinX, pinY });

export const NODES: Record<string, NodeDef> = {
  // root: Yu Han at three-way mirror, you behind. A = her waist; B = her neckline.
  root: branch('root',
    ch('choice.the_waist', 'A', 50, 55),
    ch('choice.the_neck',  'B', 50, 28),
  ),

  // A: you've come around to take the waist. AA = hips; AB = back lacing.
  A: branch('A',
    ch('choice.lower_hips',     'AA', 50, 70),
    ch('choice.loosen_lacing',  'AB', 35, 50),
  ),

  // B: hand at her neckline. BA = lift up; BB = drop down.
  B: branch('B',
    ch('choice.lift_higher', 'BA', 50, 22),
    ch('choice.drop_lower',  'BB', 50, 38),
  ),

  // AA: kneeling at hips. AAA = up at her face; AAB = her hipbone.
  AA: branch('AA',
    ch('choice.her_hair_falls', 'AAA', 55, 24),
    ch('choice.let_her_settle', 'AAB', 60, 45),
  ),

  // AB: behind her at lacing. ABA = small of her back; ABB = side mirror.
  AB: branch('AB',
    ch('choice.palm_stays', 'ABA', 50, 55),
    ch('choice.slow_shadow', 'ABB', 78, 40),
  ),

  // BA: muslin lifted. BAA = her cheek; BAB = the fabric.
  BA: branch('BA',
    ch('choice.leans_into_muslin', 'BAA', 46, 32),
    ch('choice.step_back_and_look', 'BAB', 52, 38),
  ),

  // BB: muslin lowered. BBA = central; BBB = sternum (where marks will be).
  BB: branch('BB',
    ch('choice.she_waits', 'BBA', 50, 40),
    ch('choice.six_tally', 'BBB', 50, 48),
  ),

  // Layer 3 — endings (8)
  AAA: ending('AAA', 'sensual'),
  // Reclassified to sensual after watching the actual video — Yu Han just
  // finds her own pose, hand on hip. No supernatural cue rendered.
  AAB: ending('AAB', 'sensual'),
  ABA: ending('ABA', 'sensual'),
  ABB: ending('ABB', 'horror'),
  BAA: ending('BAA', 'sensual'),
  // Reclassified to sensual after watching the actual video — the muslin
  // billows huge around her like wings. Less "fabric self-moves" horror,
  // more "she becomes the dress" sensual triumph.
  BAB: ending('BAB', 'sensual'),
  BBA: ending('BBA', 'horror'),
  BBB: ending('BBB', 'horror'),
};
