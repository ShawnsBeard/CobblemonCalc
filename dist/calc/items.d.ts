import type { Generation, TypeName, StatID } from './data/interface';
export declare const SEED_BOOSTED_STAT: {
    [item: string]: StatID;
};
export declare function getItemBoostType(item: string | undefined): "Dragon" | "Dark" | "Ground" | "Fighting" | "Fire" | "Ice" | "Bug" | "Steel" | "Grass" | "Psychic" | "Fairy" | "Flying" | "Water" | "Ghost" | "Rock" | "Poison" | "Electric" | "Normal" | undefined;
export declare function getBerryResistType(berry: string | undefined): "Dragon" | "Dark" | "Ground" | "Fighting" | "Fire" | "Ice" | "Bug" | "Steel" | "Grass" | "Psychic" | "Fairy" | "Flying" | "Water" | "Ghost" | "Rock" | "Poison" | "Electric" | "Normal" | undefined;
export declare function getFlingPower(item?: string): 0 | 130 | 85 | 110 | 100 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10;
export declare function getNaturalGift(gen: Generation, item: string): {
    t: TypeName;
    p: number;
};
export declare function getTechnoBlast(item: string): "Dark" | "Fighting" | "Fire" | "Ice" | "Psychic" | "Fairy" | "Water" | "Electric" | undefined;
export declare function getMultiAttack(item: string): TypeName | undefined;
