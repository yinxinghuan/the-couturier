// The Couturier — minimal i18n (en / zh). Choice labels + 8 endings + intro.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'couturier_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    // ── Choices ────────────────────────────────────────────────────────────
    'choice.the_waist':         'the waist',
    'choice.the_neck':          'the neck',
    'choice.lower_hips':        'lower — the hips',
    'choice.loosen_lacing':     'loosen the back lacing',
    'choice.lift_higher':       'lift it higher',
    'choice.drop_lower':        'let it fall lower',
    'choice.her_hair_falls':    'keep your hand near her face',
    'choice.let_her_settle':    'let her settle into the pose',
    'choice.palm_stays':        'leave both hands at her waist',
    'choice.slow_shadow':       'check the side mirrors',
    'choice.leans_into_muslin': 'hold the muslin to her face',
    'choice.step_back_and_look': 'step back and look',
    'choice.she_waits':         'wait, watch the mirrors',
    'choice.six_tally':         'look closer at the skin',

    // ── Endings ────────────────────────────────────────────────────────────
    'ending.AAA.title':   'her face above you',
    'ending.AAA.tagline': 'You knelt. She stood. Your hand never lowered. The fitting became a held breath.',

    'ending.AAB.title':   'the pose she chose',
    'ending.AAB.tagline': 'Her hand finds her own hip. The pose is hers now. The dress will be built around it.',

    'ending.ABA.title':   'his hands at her waist',
    'ending.ABA.tagline': "Two hands. Her waist. Neither of you lets go.",

    'ending.ABB.title':   'three poses, one body',
    'ending.ABB.tagline': 'She is in one pose. The three mirrors disagree about which.',

    'ending.BAA.title':   'she lifts it to her face',
    'ending.BAA.tagline': 'She presses her own muslin to her face the way a girl buries her face in a bouquet.',

    'ending.BAB.title':   'she becomes the dress',
    'ending.BAB.tagline': 'She lifted the muslin and it opened around her like a wing. The dress has taken her shape.',

    'ending.BBA.title':   'the women in the mirrors',
    'ending.BBA.tagline': "She stands still. The other women in the mirrors do not.",

    'ending.BBB.title':   'six marks under the dress',
    'ending.BBB.tagline': 'Six dark lines like spear-tips on her sternum. She has not noticed. You have.',

    // ── UI ─────────────────────────────────────────────────────────────────
    'ui.replay':         'pin her again',
    'ui.ending_label':   'ending',
    'ui.sensual_label':  'sensual',
    'ui.horror_label':   'wrong',
    'ui.brand_sig':      'alteru · after dark',

    // ── Intro ──────────────────────────────────────────────────────────────
    'intro.title':   'the couturier',
    'intro.hint':    'Six days before her wedding. Final fitting. Direct the dress — and the body inside it. Tap the lights — or pick a phrase. Some endings end soft. Some end wrong.',
    'intro.cta':     'tap to begin',
  },

  zh: {
    'choice.the_waist':         '量腰',
    'choice.the_neck':          '调领口',
    'choice.lower_hips':        '往下 — 量臀',
    'choice.loosen_lacing':     '松后系带',
    'choice.lift_higher':       '把它提高',
    'choice.drop_lower':        '让它往下',
    'choice.her_hair_falls':    '手停在她脸侧别动',
    'choice.let_her_settle':    '让她自己定姿势',
    'choice.palm_stays':        '双手都搭在她腰上',
    'choice.slow_shadow':       '看侧面那两扇镜',
    'choice.leans_into_muslin': '把 muslin 送到她脸前',
    'choice.step_back_and_look': '退一步看她',
    'choice.she_waits':         '等, 盯着镜子',
    'choice.six_tally':         '凑近看她皮肤',

    'ending.AAA.title':   '她的脸悬在你头顶',
    'ending.AAA.tagline': '你跪着, 她站着, 你那只伸出的手一直没放下。试衣变成一次屏息。',

    'ending.AAB.title':   '她自己定的姿势',
    'ending.AAB.tagline': '她的手找到了自己的腰。姿势是她的了。这条裙子要按这个姿势剪。',

    'ending.ABA.title':   '他双手都搭在她腰上',
    'ending.ABA.tagline': '两只手, 她的腰。你们俩谁都没松开。',

    'ending.ABB.title':   '一个身体, 三个姿势',
    'ending.ABB.tagline': '她只摆了一个姿势。三面镜子各显示了一个不同的。',

    'ending.BAA.title':   '她把它捧到脸前',
    'ending.BAA.tagline': '她把自己的 muslin 捧到面前, 像姑娘把脸埋进自己的捧花。',

    'ending.BAB.title':   '她成了那条裙子',
    'ending.BAB.tagline': '她抬起 muslin, 布在她身上张开像翅膀。裙子已经长出了她的形状。',

    'ending.BBA.title':   '镜中的另外几个她',
    'ending.BBA.tagline': '她站着不动。镜子里的另外几个她动了。',

    'ending.BBB.title':   '裙子下的六道印',
    'ending.BBB.tagline': '她锁骨下六道矛尖一样的黑色印记。她还不知道。你看见了。',

    'ui.replay':         '再钉一次',
    'ui.ending_label':   '结局',
    'ui.sensual_label':  '感官',
    'ui.horror_label':   '不对劲',
    'ui.brand_sig':      'alteru · after dark',

    'intro.title':   '裁缝',
    'intro.hint':    '婚礼前六天。最后一次试衣。你指导她的裙子 — 也指导穿着它的身体。点亮灯 — 或选一句话。有的走向温柔, 有的走向不对劲。',
    'intro.cta':     '点屏幕开始',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE][key] ?? STRINGS.en[key] ?? key;
}

export function locale(): Locale { return LOCALE; }
