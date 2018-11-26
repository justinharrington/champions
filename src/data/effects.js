import Effect, { EFFECT } from './model/Effect';

export const EFFECT_STARS_AMOUNT = {
    [ EFFECT.ATTACK ]: [ 4, 5, 6 ],
    [ EFFECT.IDOL ]: [ 2, 3, 4 ],
    [ EFFECT.INSEPARABLE ]: [ 7, 8, 9 ],
    [ EFFECT.MUTANT_AGENDA ]: [ 8, 10, 12 ],
    [ EFFECT.COSMIC_SUPREMACY ]: [ 15, 25, 30 ],
    [ EFFECT.CRITICAL_RATE ]: [ 5, 6, 7 ],
    [ EFFECT.CRITICAL_DAMAGE ]: [ 15, 20, 25 ],
    [ EFFECT.BLEED ]: [ 15, 20, 25 ],
    [ EFFECT.COMBO ]: [ 5, 10, 15 ],
    [ EFFECT.STUN_ACTIVATION ]: [ 5, 10, 15 ],
    [ EFFECT.STUN_SPECIAL ]: [ 15, 20, 25 ],
    [ EFFECT.POWER_GAIN ]: [ 3, 4, 5 ],
    [ EFFECT.ITS_COMPLICATED ]: [ 1, 2, 3 ],
    [ EFFECT.PERFECT_BLOCK ]: [ 3, 4, 5 ],
    [ EFFECT.ARMOR ]: [ 5, 6, 7 ],
    [ EFFECT.HEALTH ]: [ 4, 5, 6 ],
    [ EFFECT.HEROES_FOR_HIRE ]: [ 3, 4, 5 ],
    [ EFFECT.THUNDERBOLTS ]: [ 4, 5, 6 ],
    [ EFFECT.MASTERMINDS ]: [ 5, 10, 15 ],
    [ EFFECT.SHIELD_AGENTS ]: [ 10, 12, 15 ],
    [ EFFECT.SHIELD_CLEARANCE ]: [ 10, 12, 15 ],
    [ EFFECT.SHARED_GENETIC_MEMORY ]: [ 10, 12, 15 ],
    [ EFFECT.DEMON_HUNTER ]: [ 10, 12, 15 ],
    [ EFFECT.SPIRIT_OF_JUSTICE ]: [ 10, 12, 15 ],
    [ EFFECT.HEIGHTENED_SENSES ]: [ 10, 12, 15 ],
    [ EFFECT.COMPETITION ]: [ 10, 12, 15 ],
    [ EFFECT.BANE_OF_HELLS_KITCHEN ]: [ 10, 12, 15 ],
    [ EFFECT.DEFENDERS_DESTROYER ]: [ 10, 12, 15 ],
    [ EFFECT.SPLIT_PERSONALITY ]: [ 10, 12, 15 ],
    [ EFFECT.ELECTRIC_SUPERCHARGE ]: [ 10, 12, 15 ],
    [ EFFECT.SEETHING_HATRED ]: [ 10, 12, 15 ],
    [ EFFECT.PARTICLE_PHYSICS ]: [ 10, 12, 15 ],
    [ EFFECT.ENGINEERING ]: [ 10, 12, 15 ],
    [ EFFECT.BIOCHEMISTRY ]: [ 10, 12, 15 ],
    [ EFFECT.AVENGERS_TRYOUT ]: [ 10, 12, 15 ],
    [ EFFECT.CONTEST_NOOBS ]: [ 10, 12, 15 ],
    [ EFFECT.KNOWLEDGE_SHARE ]: [ 10, 12, 15 ],
    [ EFFECT.MASTERS_OF_THE_SWORD ]: [ 10, 12, 15 ],
    [ EFFECT.SOUL_SEEKER ]: [ 10, 12, 15 ],
    [ EFFECT.WARRIOR_QUEENS ]: [ 10, 12, 15 ],
    [ EFFECT.LOYAL_MINISTER ]: [ 10, 12, 15 ],
    [ EFFECT.CROSS_TRAINING ]: [ 10, 12, 15 ],
    [ EFFECT.BELIEVER ]: [ 10, 12, 15 ],
    [ EFFECT.TEAM_BUILDING_EXERCISE ]: [ 10, 12, 15 ],
    [ EFFECT.LULLABY ]: [ 10, 12, 15 ],
    [ EFFECT.OFF_LIMITS ]: [ 10, 12, 15 ],
    [ EFFECT.PUNY_GOD ]: [ 10, 12, 15 ],
    [ EFFECT.OVERCOMING_FEAR ]: [ 10, 12, 15 ],
    [ EFFECT.LIKE_OLD_DAYS ]: [ 10, 12, 15 ],
    [ EFFECT.NOT_AFRAID_OF_DEATH ]: [ 10, 12, 15 ],
    [ EFFECT.FRIEND_FROM_WORK ]: [ 10, 12, 15 ],
    [ EFFECT.ADVANCED_IDEA_MECHANICS ]: [ 10, 12, 15 ],
    [ EFFECT.CHAIR_LARCENY ]: [ 10, 12, 15 ],
    [ EFFECT.IMMORTAL_SOULS ]: [ 10, 12, 15 ],
    [ EFFECT.QUEEN_OF_HEL ]: [ 10, 12, 15 ],
    [ EFFECT.HELL_LORDS ]: [ 10, 12, 15 ],
    [ EFFECT.CUBICLE_MATES ]: [ 10, 12, 15 ],
    [ EFFECT.OTHER_HALF ]: [ 10, 12, 15 ],
    [ EFFECT.TERMINATION_CONTRACT ]: [ 10, 12, 15 ],
    [ EFFECT.PROFESSORS_IN_CRIME ]: [ 10, 12, 15 ],
    [ EFFECT.MOSTLY_AVERAGE_JOES ]: [ 10, 12, 15 ],
    [ EFFECT.THUNDER ]: [ 10, 12, 15 ],
    [ EFFECT.TEAM_DEADPOOL_AWESOME_FORCE ]: [ 10, 12, 15 ],
    [ EFFECT.BROKEN_MINDS ]: [ 10, 12, 15 ],
    [ EFFECT.ANNOYANCES_ASSEMBLE ]: [ 10, 12, 15 ],
    [ EFFECT.SIX_PACK ]: [ 10, 12, 15 ],
    [ EFFECT.XFORCE ]: [ 10, 12, 15 ],
    [ EFFECT.WEAPON_X_STRIKE_TEAM ]: [ 10, 12, 15 ],
    [ EFFECT.CODE_RED_REVELATIONS ]: [ 10, 12, 15 ],
    [ EFFECT.MERCS_FOR_MONEY ]: [ 10, 12, 15 ],
    [ EFFECT.BETTER_LUCK_NEXT_TIME ]: [ 10, 12, 15 ],
    [ EFFECT.COMPLICATED ]: [ 10, 12, 15 ],
    [ EFFECT.ESOTERIC_INSIGHT ]: [ 10, 12, 15 ],
    [ EFFECT.FAMILIAR_INSIGHT ]: [ 10, 12, 15 ],
    [ EFFECT.AI_UPGRADE ]: [ 10, 12, 15 ],
    [ EFFECT.WAKANDAN_INSIGHT ]: [ 10, 12, 15 ],
    [ EFFECT.ENHANCED_SOLDIERS ]: [ 10, 12, 15 ],
    [ EFFECT.WAKANDA_LEADERSHIP ]: [ 10, 12, 15 ],
    [ EFFECT.FEARLESS ]: [ 10, 12, 15 ],
    [ EFFECT.MUTANT_PURSUIT ]: [ 10, 12, 15 ],
    [ EFFECT.SKILL_TRAINING ]: [ 10, 12, 15 ],
    [ EFFECT.SCIENCE_RESEARCH ]: [ 10, 12, 15 ],
    [ EFFECT.MYSTIC_OBSERVATION ]: [ 10, 12, 15 ],
    [ EFFECT.TECH_ADVANCEMENT ]: [ 10, 12, 15 ],
    [ EFFECT.CHRONAL_ANCHOR ]: [ 10, 12, 15 ],
    [ EFFECT.ENERGY_CONDUIT ]: [ 10, 12, 15 ],
    [ EFFECT.DEMONS ]: [ 10, 12, 15 ],
    [ EFFECT.PACT_WITH_A_DEMON ]: [ 10, 12, 15 ],
    [ EFFECT.INHUMAN_ROYAL_FAMILY ]: [ 10, 12, 15 ],
    [ EFFECT.INSPIRATION ]: [ 10, 12, 15 ],
    [ EFFECT.GET_IN_THE_POOL ]: [ 10, 12, 15 ],
    [ EFFECT.SPIRITUAL_STRENGTH ]: [ 10, 12, 15 ],
    [ EFFECT.PLAYING_WITH_FIRE ]: [ 10, 12, 15 ],
    [ EFFECT.TECH_BREAKTHROUGH ]: [ 10, 12, 15 ],
    [ EFFECT.MUTANT_EVOLUTION ]: [ 10, 12, 15 ],
    [ EFFECT.SKILL_TRAINING_CAIW ]: [ 10, 12, 15 ],
    [ EFFECT.SCIENCE_EXPERIMENT ]: [ 10, 12, 15 ],
    [ EFFECT.MYSTIC_CRAFT ]: [ 10, 12, 15 ],
    [ EFFECT.COSMIC_POWER ]: [ 10, 12, 15 ],
    [ EFFECT.ADVANCED_TECH ]: [ 10, 12, 15 ],
    [ EFFECT.HARD_TO_HIT ]: [ 10, 12, 15 ],
    [ EFFECT.DEADLY_STING ]: [ 10, 12, 15 ],
    [ EFFECT.UNTAMED_FORCE ]: [ 10, 12, 15 ],
    [ EFFECT.DECIMATION ]: [ 10, 12, 15 ],
    [ EFFECT.NO_MERCY ]: [ 10, 12, 15 ],
    [ EFFECT.FORMIDABLE_FOE ]: [ 10, 12, 15 ],
    [ EFFECT.MICROSCOPIC_OBSERVATION ]: [ 10, 12, 15 ],
    [ EFFECT.THE_UNTOUCHABLES ]: [ 10, 12, 15 ],
    [ EFFECT.UNMERCIFUL_PUNISHMENT ]: [ 10, 12, 15 ],
    [ EFFECT.ASGARDIAN_HUNT ]: [ 10, 12, 15 ],
    [ EFFECT.SPECIAL_ASSIST ]: [ 10, 12, 15 ],
    [ EFFECT.HUNT_THE_UNCANNY ]: [ 10, 12, 15 ],
    [ EFFECT.CHALLENGE_DEFENSES ]: [ 10, 12, 15 ],
    [ EFFECT.GRIPPED_BY_FEAR ]: [ 10, 12, 15 ],
    [ EFFECT.ENGULFED_BY_THE_VOID ]: [ 10, 12, 15 ],
    [ EFFECT.ENCHANTED_BLADES ]: [ 10, 12, 15 ],
    [ EFFECT.LOST_DAUGHTERS_OF_ASGARD ]: [ 10, 12, 15 ],
    [ EFFECT.WARRIORS_OF_ASGARD ]: [ 10, 12, 15 ],
    [ EFFECT.PIT_FIGHTERS ]: [ 10, 12, 15 ],
    [ EFFECT.GRANDMASTERS_CHAMPIONS ]: [ 10, 12, 15 ],
    [ EFFECT.ELEMENTAL_HIDE ]: [ 10, 12, 15 ],
    [ EFFECT.DARK_ILLUMINATI ]: [ 10, 12, 15 ],
    [ EFFECT.ETERNAL_ADVERSARIES ]: [ 10, 12, 15 ],
    [ EFFECT.HAIL_HYDRA ]: [ 10, 12, 15 ],
    [ EFFECT.DARK_EMPOWERMENT ]: [ 10, 12, 15 ],
    [ EFFECT.METAL_MAYHEM ]: [ 10, 12, 15 ],
    [ EFFECT.XASSASSINS ]: [ 10, 12, 15 ],
    [ EFFECT.SEEING_RED ]: [ 10, 12, 15 ],
    [ EFFECT.DEADLY_PRESENCE ]: [ 10, 12, 15 ],
    [ EFFECT.MEMORIES_OF_GENOSHA ]: [ 10, 12, 15 ],
    [ EFFECT.IMPENETRABLE_HIDE ]: [ 10, 12, 15 ],
    [ EFFECT.ITS_COMPLICATED_2 ]: [ 10, 12, 15 ],
    [ EFFECT.PHOENIX_FORCE ]: [ 10, 12, 15 ],
    [ EFFECT.TOUGH_BRAWLERS ]: [ 10, 12, 15 ],
    [ EFFECT.PERSISTENT_FORCE ]: [ 10, 12, 15 ],
    [ EFFECT.COMBO_FIGHTER ]: [ 10, 12, 15 ],
    [ EFFECT.DAVID_AND_GOLIATH ]: [ 10, 12, 15 ],
    [ EFFECT.COMBO_BREAKERS ]: [ 10, 12, 15 ],
    [ EFFECT.WARRIORS_OF_THE_STARS ]: [ 10, 12, 15 ],
    [ EFFECT.FRIENDS ]: [ 10, 12, 15 ],
};
export const EFFECT_STARS_INDEX = { 1: 0, 2: 0, 3: 1, 4: 2, 5: 2 };

const effects = [

    { uid: EFFECT.ATTACK },
    { uid: EFFECT.IDOL },
    { uid: EFFECT.INSEPARABLE },
    { uid: EFFECT.MUTANT_AGENDA },
    { uid: EFFECT.COSMIC_SUPREMACY },
    { uid: EFFECT.CRITICAL_RATE },
    { uid: EFFECT.CRITICAL_DAMAGE },
    { uid: EFFECT.BLEED },
    { uid: EFFECT.COMBO },
    { uid: EFFECT.STUN_ACTIVATION },
    { uid: EFFECT.STUN_SPECIAL },
    { uid: EFFECT.POWER_GAIN },
    { uid: EFFECT.ITS_COMPLICATED },
    { uid: EFFECT.PERFECT_BLOCK },
    { uid: EFFECT.ARMOR },
    { uid: EFFECT.HEALTH },
    { uid: EFFECT.HEROES_FOR_HIRE },
    { uid: EFFECT.THUNDERBOLTS },
    { uid: EFFECT.MASTERMINDS },
    { uid: EFFECT.SHIELD_AGENTS },
    { uid: EFFECT.SHIELD_CLEARANCE },
    { uid: EFFECT.SHARED_GENETIC_MEMORY },
    { uid: EFFECT.DEMON_HUNTER },
    { uid: EFFECT.SPIRIT_OF_JUSTICE },
    { uid: EFFECT.HEIGHTENED_SENSES },
    { uid: EFFECT.COMPETITION },
    { uid: EFFECT.BANE_OF_HELLS_KITCHEN },
    { uid: EFFECT.DEFENDERS_DESTROYER },
    { uid: EFFECT.SPLIT_PERSONALITY },
    { uid: EFFECT.ELECTRIC_SUPERCHARGE },
    { uid: EFFECT.SEETHING_HATRED },
    { uid: EFFECT.PARTICLE_PHYSICS },
    { uid: EFFECT.ENGINEERING },
    { uid: EFFECT.BIOCHEMISTRY },
    { uid: EFFECT.AVENGERS_TRYOUT },
    { uid: EFFECT.KNOWLEDGE_SHARE },
    { uid: EFFECT.CONTEST_NOOBS },
    { uid: EFFECT.MASTERS_OF_THE_SWORD },
    { uid: EFFECT.SOUL_SEEKER },
    { uid: EFFECT.WARRIOR_QUEENS },
    { uid: EFFECT.BELIEVER },
    { uid: EFFECT.CROSS_TRAINING },
    { uid: EFFECT.LOYAL_MINISTER },
    { uid: EFFECT.TEAM_BUILDING_EXERCISE },
    { uid: EFFECT.LULLABY },
    { uid: EFFECT.OFF_LIMITS },
    { uid: EFFECT.PUNY_GOD },
    { uid: EFFECT.OVERCOMING_FEAR },
    { uid: EFFECT.LIKE_OLD_DAYS },
    { uid: EFFECT.NOT_AFRAID_OF_DEATH },
    { uid: EFFECT.FRIEND_FROM_WORK },
    { uid: EFFECT.ADVANCED_IDEA_MECHANICS },
    { uid: EFFECT.CHAIR_LARCENY },
    { uid: EFFECT.IMMORTAL_SOULS },
    { uid: EFFECT.QUEEN_OF_HEL },
    { uid: EFFECT.HELL_LORDS },
    { uid: EFFECT.OTHER_HALF },
    { uid: EFFECT.CUBICLE_MATES },
    { uid: EFFECT.TERMINATION_CONTRACT },
    { uid: EFFECT.PROFESSORS_IN_CRIME },
    { uid: EFFECT.MOSTLY_AVERAGE_JOES },
    { uid: EFFECT.THUNDER },
    { uid: EFFECT.TEAM_DEADPOOL_AWESOME_FORCE },
    { uid: EFFECT.BROKEN_MINDS },
    { uid: EFFECT.ANNOYANCES_ASSEMBLE },
    { uid: EFFECT.SIX_PACK },
    { uid: EFFECT.XFORCE },
    { uid: EFFECT.WEAPON_X_STRIKE_TEAM },
    { uid: EFFECT.MERCS_FOR_MONEY },
    { uid: EFFECT.CODE_RED_REVELATIONS },
    { uid: EFFECT.BETTER_LUCK_NEXT_TIME },
    { uid: EFFECT.COMPLICATED },
    { uid: EFFECT.ESOTERIC_INSIGHT },
    { uid: EFFECT.FAMILIAR_INSIGHT },
    { uid: EFFECT.AI_UPGRADE },
    { uid: EFFECT.WAKANDAN_INSIGHT },
    { uid: EFFECT.ENHANCED_SOLDIERS },
    { uid: EFFECT.WAKANDA_LEADERSHIP },
    { uid: EFFECT.FEARLESS },
    { uid: EFFECT.MUTANT_PURSUIT },
    { uid: EFFECT.SKILL_TRAINING },
    { uid: EFFECT.SCIENCE_RESEARCH },
    { uid: EFFECT.MYSTIC_OBSERVATION },
    { uid: EFFECT.TECH_ADVANCEMENT },
    { uid: EFFECT.CHRONAL_ANCHOR },
    { uid: EFFECT.ENERGY_CONDUIT },
    { uid: EFFECT.DEMONS },
    { uid: EFFECT.PACT_WITH_A_DEMON },
    { uid: EFFECT.INHUMAN_ROYAL_FAMILY },
    { uid: EFFECT.INSPIRATION },
    { uid: EFFECT.GET_IN_THE_POOL },
    { uid: EFFECT.SPIRITUAL_STRENGTH },
    { uid: EFFECT.PLAYING_WITH_FIRE },
    { uid: EFFECT.TECH_BREAKTHROUGH },
    { uid: EFFECT.MUTANT_EVOLUTION },
    { uid: EFFECT.SKILL_TRAINING_CAIW },
    { uid: EFFECT.SCIENCE_EXPERIMENT },
    { uid: EFFECT.MYSTIC_CRAFT },
    { uid: EFFECT.COSMIC_POWER },
    { uid: EFFECT.ADVANCED_TECH },
    { uid: EFFECT.DEADLY_STING },
    { uid: EFFECT.HARD_TO_HIT },
    { uid: EFFECT.UNTAMED_FORCE },
    { uid: EFFECT.DECIMATION },
    { uid: EFFECT.NO_MERCY },
    { uid: EFFECT.FORMIDABLE_FOE },
    { uid: EFFECT.THE_UNTOUCHABLES },
    { uid: EFFECT.MICROSCOPIC_OBSERVATION },
    { uid: EFFECT.UNMERCIFUL_PUNISHMENT },
    { uid: EFFECT.ASGARDIAN_HUNT },
    { uid: EFFECT.SPECIAL_ASSIST },
    { uid: EFFECT.HUNT_THE_UNCANNY },
    { uid: EFFECT.CHALLENGE_DEFENSES },
    { uid: EFFECT.GRIPPED_BY_FEAR },
    { uid: EFFECT.ENGULFED_BY_THE_VOID },
    { uid: EFFECT.ENCHANTED_BLADES },
    { uid: EFFECT.LOST_DAUGHTERS_OF_ASGARD },
    { uid: EFFECT.WARRIORS_OF_ASGARD },
    { uid: EFFECT.PIT_FIGHTERS },
    { uid: EFFECT.GRANDMASTERS_CHAMPIONS },
    { uid: EFFECT.ELEMENTAL_HIDE },
    { uid: EFFECT.DARK_ILLUMINATI },
    { uid: EFFECT.ETERNAL_ADVERSARIES },
    { uid: EFFECT.HAIL_HYDRA },
    { uid: EFFECT.DARK_EMPOWERMENT },
    { uid: EFFECT.METAL_MAYHEM },
    { uid: EFFECT.XASSASSINS },
    { uid: EFFECT.SEEING_RED },
    { uid: EFFECT.DEADLY_PRESENCE },
    { uid: EFFECT.MEMORIES_OF_GENOSHA },
    { uid: EFFECT.IMPENETRABLE_HIDE },
    { uid: EFFECT.ITS_COMPLICATED_2 },
    { uid: EFFECT.PHOENIX_FORCE },
    { uid: EFFECT.COMBO_FIGHTER },
    { uid: EFFECT.PERSISTENT_FORCE },
    { uid: EFFECT.TOUGH_BRAWLERS },
    { uid: EFFECT.DAVID_AND_GOLIATH },
    { uid: EFFECT.COMBO_BREAKERS },
    { uid: EFFECT.WARRIORS_OF_THE_STARS },
    { uid: EFFECT.FRIENDS },

].map(({ uid }) => new Effect({
    uid,
    base: EFFECT_STARS_AMOUNT[ uid ][ 0 ],
}));

const effectIcons = {
    [ EFFECT.ATTACK ]: 'effect-attack',
    [ EFFECT.IDOL ]: 'effect-idol',
    [ EFFECT.INSEPARABLE ]: 'effect-inseparable',
    [ EFFECT.MUTANT_AGENDA ]: 'effect-mutant-agenda',
    [ EFFECT.COSMIC_SUPREMACY ]: 'effect-cosmic-supremacy',
    [ EFFECT.CRITICAL_RATE ]: 'effect-critical-rate',
    [ EFFECT.CRITICAL_DAMAGE ]: 'effect-critical-damage',
    [ EFFECT.BLEED ]: 'effect-bleed',
    [ EFFECT.COMBO ]: 'effect-combo',
    [ EFFECT.STUN_ACTIVATION ]: 'effect-stun',
    [ EFFECT.STUN_SPECIAL ]: 'effect-stun-special',
    [ EFFECT.POWER_GAIN ]: 'effect-power',
    [ EFFECT.POWER_STEAL ]: 'effect-power-lock',
    [ EFFECT.ITS_COMPLICATED ]: 'effect-power',
    [ EFFECT.PERFECT_BLOCK ]: 'effect-perfect-block',
    [ EFFECT.ARMOR ]: 'effect-armor',
    [ EFFECT.HEALTH ]: 'effect-health',
    [ EFFECT.HEALTH_STEAL ]: 'effect-health-steal',
    [ EFFECT.HEROES_FOR_HIRE ]: 'effect-heroes-for-hire',
    [ EFFECT.THUNDERBOLTS ]: 'effect-thunderbolts',
    [ EFFECT.MASTERMINDS ]: 'effect-masterminds',
    [ EFFECT.SHIELD_AGENTS ]: 'effect-shield',
    [ EFFECT.SHIELD_CLEARANCE ]: 'effect-shield',
    [ EFFECT.SHARED_GENETIC_MEMORY ]: 'effect-shared-genetic-memory',
    [ EFFECT.DEMON_HUNTER ]: 'type-mystic',
    [ EFFECT.SPIRIT_OF_JUSTICE ]: 'effect-spirit-of-justice',
    [ EFFECT.HEIGHTENED_SENSES ]: 'effect-heightened-senses',
    [ EFFECT.COMPETITION ]: 'effect-competition',
    [ EFFECT.BANE_OF_HELLS_KITCHEN ]: 'effect-bane-of-hells-kitchen',
    [ EFFECT.DEFENDERS_DESTROYER ]: 'effect-armor-break',
    [ EFFECT.SPLIT_PERSONALITY ]: 'effect-inseparable',
    [ EFFECT.ELECTRIC_SUPERCHARGE ]: 'effect-electric-supercharge',
    [ EFFECT.SEETHING_HATRED ]: 'effect-seething-hatred',
    [ EFFECT.PARTICLE_PHYSICS ]: 'effect-particle-physics',
    [ EFFECT.ENGINEERING ]: 'type-tech',
    [ EFFECT.BIOCHEMISTRY ]: 'effect-biochemistry',
    [ EFFECT.AVENGERS_TRYOUT ]: 'effect-avengers-tryout',
    [ EFFECT.KNOWLEDGE_SHARE ]: 'effect-masterminds',
    [ EFFECT.CONTEST_NOOBS ]: 'effect-inseparable',
    [ EFFECT.MASTERS_OF_THE_SWORD ]: 'effect-masters-of-the-sword',
    [ EFFECT.SOUL_SEEKER ]: 'effect-soul-seeker',
    [ EFFECT.WARRIOR_QUEENS ]: 'effect-warrior-queens',
    [ EFFECT.BELIEVER ]: 'effect-believer',
    [ EFFECT.CROSS_TRAINING ]: 'effect-degeneration',
    [ EFFECT.LOYAL_MINISTER ]: 'effect-combo',
    [ EFFECT.TEAM_BUILDING_EXERCISE ]: 'effect-unstoppable',
    [ EFFECT.LULLABY ]: 'effect-lullaby',
    [ EFFECT.OFF_LIMITS ]: 'effect-lullaby',
    [ EFFECT.PUNY_GOD ]: 'effect-combo',
    [ EFFECT.OVERCOMING_FEAR ]: 'effect-overcoming-fear',
    [ EFFECT.LIKE_OLD_DAYS ]: 'effect-like-old-days',
    [ EFFECT.NOT_AFRAID_OF_DEATH ]: 'effect-regeneration',
    [ EFFECT.FRIEND_FROM_WORK ]: 'effect-friend-from-work',
    [ EFFECT.ADVANCED_IDEA_MECHANICS ]: 'effect-advanced-idea-mechanics',
    [ EFFECT.CHAIR_LARCENY ]: 'effect-bane-of-hells-kitchen',
    [ EFFECT.IMMORTAL_SOULS ]: 'effect-nullify',
    [ EFFECT.QUEEN_OF_HEL ]: 'effect-regeneration',
    [ EFFECT.HELL_LORDS ]: 'effect-hell-lords',
    [ EFFECT.CUBICLE_MATES ]: 'effect-biochemistry',
    [ EFFECT.OTHER_HALF ]: 'effect-degeneration',
    [ EFFECT.TERMINATION_CONTRACT ]: 'effect-overcoming-fear',
    [ EFFECT.PROFESSORS_IN_CRIME ]: 'effect-hell-lords',
    [ EFFECT.MOSTLY_AVERAGE_JOES ]: 'effect-mostly-average-joes',
    [ EFFECT.THUNDER ]: 'effect-shock',
    [ EFFECT.TEAM_DEADPOOL_AWESOME_FORCE ]: 'effect-immunity-bleed',
    [ EFFECT.ANNOYANCES_ASSEMBLE ]: 'effect-annoyances-assemble',
    [ EFFECT.BROKEN_MINDS ]: 'effect-broken-minds',
    [ EFFECT.SIX_PACK ]: 'effect-attack',
    [ EFFECT.XFORCE ]: 'effect-perfect-block',
    [ EFFECT.WEAPON_X_STRIKE_TEAM ]: 'effect-weapon-x',
    [ EFFECT.MERCS_FOR_MONEY ]: 'effect-mercs-for-money',
    [ EFFECT.CODE_RED_REVELATIONS ]: 'effect-mercs-for-money',
    [ EFFECT.BETTER_LUCK_NEXT_TIME ]: 'effect-advanced-idea-mechanics',
    [ EFFECT.COMPLICATED ]: 'effect-power',
    [ EFFECT.ESOTERIC_INSIGHT ]: 'effect-power-lock',
    [ EFFECT.FAMILIAR_INSIGHT ]: 'effect-perfect-block',
    [ EFFECT.WAKANDAN_INSIGHT ]: 'effect-wakandan-insight',
    [ EFFECT.AI_UPGRADE ]: 'type-tech',
    [ EFFECT.ENHANCED_SOLDIERS ]: 'effect-friend-from-work',
    [ EFFECT.WAKANDA_LEADERSHIP ]: 'effect-perfect-block',
    [ EFFECT.FEARLESS ]: 'effect-regeneration',
    [ EFFECT.MUTANT_PURSUIT ]: 'effect-mutant-pursuit',
    [ EFFECT.SKILL_TRAINING ]: 'effect-skill-training',
    [ EFFECT.SCIENCE_RESEARCH ]: 'effect-science-research',
    [ EFFECT.MYSTIC_OBSERVATION ]: 'effect-mystic-observation',
    [ EFFECT.TECH_ADVANCEMENT ]: 'effect-tech-advancement',
    [ EFFECT.CHRONAL_ANCHOR ]: 'effect-chronal-anchor',
    [ EFFECT.ENERGY_CONDUIT ]: 'effect-resist-energy',
    [ EFFECT.DEMONS ]: 'effect-demons',
    [ EFFECT.PACT_WITH_A_DEMON ]: 'effect-mercs-for-money',
    [ EFFECT.INHUMAN_ROYAL_FAMILY ]: 'effect-armor-break',
    [ EFFECT.INSPIRATION ]: 'effect-critical-rate',
    [ EFFECT.GET_IN_THE_POOL ]: 'effect-mercs-for-money',
    [ EFFECT.SPIRITUAL_STRENGTH ]: 'effect-evade',
    [ EFFECT.PLAYING_WITH_FIRE ]: 'effect-mercs-for-money',
    [ EFFECT.TECH_BREAKTHROUGH ]: 'type-tech',
    [ EFFECT.MUTANT_EVOLUTION ]: 'type-mutant',
    [ EFFECT.SKILL_TRAINING_CAIW ]: 'type-skill',
    [ EFFECT.SCIENCE_EXPERIMENT ]: 'type-science',
    [ EFFECT.MYSTIC_CRAFT ]: 'type-mystic',
    [ EFFECT.COSMIC_POWER ]: 'type-cosmic',
    [ EFFECT.ADVANCED_TECH ]: 'effect-masterminds',
    [ EFFECT.DEADLY_STING ]: 'effect-deadly-string',
    [ EFFECT.HARD_TO_HIT ]: 'effect-evade',
    [ EFFECT.UNTAMED_FORCE ]: 'effect-regeneration',
    [ EFFECT.DECIMATION ]: 'effect-friend-from-work',
    [ EFFECT.NO_MERCY ]: 'effect-hell-lords',
    [ EFFECT.FORMIDABLE_FOE ]: 'effect-attack',
    [ EFFECT.MICROSCOPIC_OBSERVATION ]: 'effect-mostly-average-joes',
    [ EFFECT.THE_UNTOUCHABLES ]: 'effect-untouchables',
    [ EFFECT.UNMERCIFUL_PUNISHMENT ]: 'effect-friend-from-work',
    [ EFFECT.ASGARDIAN_HUNT ]: 'effect-critical-rate',
    [ EFFECT.SPECIAL_ASSIST ]: 'effect-idol',
    [ EFFECT.HUNT_THE_UNCANNY ]: 'effect-critical-damage',
    [ EFFECT.CHALLENGE_DEFENSES ]: 'effect-directdamage',
    [ EFFECT.GRIPPED_BY_FEAR ]: 'effect-friend-from-work',
    [ EFFECT.ENGULFED_BY_THE_VOID ]: 'effect-bane-of-hells-kitchen',
    [ EFFECT.ENCHANTED_BLADES ]: 'effect-critical-rate',
    [ EFFECT.LOST_DAUGHTERS_OF_ASGARD ]: 'effect-attack',
    [ EFFECT.WARRIORS_OF_ASGARD ]: 'effect-regeneration',
    [ EFFECT.PIT_FIGHTERS ]: 'effect-friend-from-work',
    [ EFFECT.GRANDMASTERS_CHAMPIONS ]: 'effect-armor-break',
    [ EFFECT.ELEMENTAL_HIDE ]: 'effect-elemental-hide',
    [ EFFECT.DARK_ILLUMINATI ]: 'effect-armor',
    [ EFFECT.ETERNAL_ADVERSARIES ]: 'effect-bane-of-hells-kitchen',
    [ EFFECT.HAIL_HYDRA ]: 'effect-heal-block',
    [ EFFECT.DARK_EMPOWERMENT ]: 'effect-spirit-of-justice',
    [ EFFECT.METAL_MAYHEM ]: 'effect-metal-mayhem',
    [ EFFECT.XASSASSINS ]: 'effect-xassassins',
    [ EFFECT.SEEING_RED ]: 'effect-seeing-red',
    [ EFFECT.DEADLY_PRESENCE ]: 'effect-deadly-presence',
    [ EFFECT.MEMORIES_OF_GENOSHA ]: 'effect-perfect-block',
    [ EFFECT.IMPENETRABLE_HIDE ]: 'type-mutant',
    [ EFFECT.ITS_COMPLICATED_2 ]: 'effect-power',
    [ EFFECT.PHOENIX_FORCE ]: 'effect-avengers-tryout',
    [ EFFECT.TOUGH_BRAWLERS ]: 'effect-unstoppable',
    [ EFFECT.PERSISTENT_FORCE ]: 'effect-believer',
    [ EFFECT.COMBO_FIGHTER ]: 'effect-attack',
    [ EFFECT.DAVID_AND_GOLIATH ]: 'effect-attack',
    [ EFFECT.COMBO_BREAKERS ]: 'effect-like-old-days',
    [ EFFECT.WARRIORS_OF_THE_STARS ]: 'effect-attack',
    [ EFFECT.FRIENDS ]: 'effect-critical-rate',
};

function effectIcon(uid) {
    return effectIcons[ uid ] || 'circle';
}

const effectBases = effects.reduce((map, { attr }) => {
    map[ attr.uid ] = attr.base;
    return map;
}, {});
function effectBase(uid) {
    return effectBases[ uid ] || 1000;
}

export { effectIcon, effectBase };
export default effects;
