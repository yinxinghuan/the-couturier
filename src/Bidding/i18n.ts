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
    'choice.her_hair_falls':    'let her hair fall',
    'choice.her_hip_click':     'press the hipbone',
    'choice.palm_stays':        'leave the palm there',
    'choice.slow_shadow':       'check the side mirror',
    'choice.leans_into_muslin': 'hold the muslin',
    'choice.fabric_returns':    'let go',
    'choice.she_waits':         'wait',
    'choice.six_tally':         'look closer',

    // ── Endings ────────────────────────────────────────────────────────────
    'ending.AAA.title':   'her hair falls',
    'ending.AAA.tagline': 'She lets a strand fall onto your forehead. Neither of you moves.',

    'ending.AAB.title':   'she stopped',
    'ending.AAB.tagline': "You touched her hipbone. She stopped breathing. She has not started again.",

    'ending.ABA.title':   'your palm stays',
    'ending.ABA.tagline': 'The lacing is loose. Your hand has not left her back.',

    'ending.ABB.title':   'the slow shadow',
    'ending.ABB.tagline': 'The side mirrors caught her first. The center mirror has not.',

    'ending.BAA.title':   'she lifts it to her face',
    'ending.BAA.tagline': 'She raises the muslin to her face like a girl burying her face in a bouquet. Eyes closed.',

    'ending.BAB.title':   'the fabric returns',
    'ending.BAB.tagline': 'You let go. The neckline slid back down by itself. Slowly.',

    'ending.BBA.title':   'the women in the mirrors',
    'ending.BBA.tagline': "She does not move. The other women in the mirrors do.",

    'ending.BBB.title':   'six tally marks',
    'ending.BBB.tagline': 'Six counted lines on her sternum. She has not noticed yet. You have.',

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
    'choice.her_hair_falls':    '让她的发丝落下',
    'choice.her_hip_click':     '按一下她的髋骨',
    'choice.palm_stays':        '手别移开',
    'choice.slow_shadow':       '看侧面那扇镜',
    'choice.leans_into_muslin': '托住 muslin',
    'choice.fabric_returns':    '松手',
    'choice.she_waits':         '等',
    'choice.six_tally':         '再凑近看',

    'ending.AAA.title':   '散下来的发丝',
    'ending.AAA.tagline': '她让一缕发丝落到你额头上。你们都没动。',

    'ending.AAB.title':   '她停下了',
    'ending.AAB.tagline': '你按了她的髋骨。她停止了呼吸。一直没再开始。',

    'ending.ABA.title':   '你的手没拿开',
    'ending.ABA.tagline': '系带已经松了。你的手还停在她后腰上。',

    'ending.ABB.title':   '慢半拍的影子',
    'ending.ABB.tagline': '左右两面镜先转过去了。中央那一面还没。',

    'ending.BAA.title':   '她把它捧到脸前',
    'ending.BAA.tagline': '她把 muslin 捧到面前, 像姑娘把脸埋进捧花。眼睛闭着。',

    'ending.BAB.title':   '布自己回来了',
    'ending.BAB.tagline': '你松开了。领口自己慢慢滑回原来的位置。',

    'ending.BBA.title':   '镜中的另外几个她',
    'ending.BBA.tagline': '她没动。镜子里的几个她动了。',

    'ending.BBB.title':   '六道划痕',
    'ending.BBB.tagline': '她锁骨下方六道平行黑色划痕, 像数日子。她还不知道。你看见了。',

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
